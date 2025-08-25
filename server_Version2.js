const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const PASLON_FILE = path.join(__dirname, 'paslon.json');
const VOTES_FILE = path.join(__dirname, 'votes.json');

// Endpoint daftar pasangan calon
app.get('/paslon', (req, res) => {
  const paslon = JSON.parse(fs.readFileSync(PASLON_FILE));
  res.json(paslon);
});

// Endpoint vote
app.post('/vote', (req, res) => {
  const { angkatan, npm, paslon } = req.body;
  if(!angkatan || !npm || !paslon) {
    return res.json({success:false, message:"Data tidak lengkap"});
  }
  let votes = [];
  if (fs.existsSync(VOTES_FILE)) {
    votes = JSON.parse(fs.readFileSync(VOTES_FILE));
  }
  // Validasi NPM belum voting
  if (votes.find(v => v.npm === npm)) {
    return res.json({success:false, message: 'NPM sudah melakukan voting!'});
  }
  votes.push({angkatan, npm, paslon, waktu:new Date().toISOString()});
  fs.writeFileSync(VOTES_FILE, JSON.stringify(votes, null, 2));
  res.json({success:true, message: 'Voting berhasil! Terima kasih.'});
});

// Endpoint rekap (opsional, bisa dihapus jika tidak ingin public)
app.get('/rekap', (req, res) => {
  if (!fs.existsSync(VOTES_FILE)) return res.json({});
  let votes = JSON.parse(fs.readFileSync(VOTES_FILE));
  let hasil = {};
  votes.forEach(v => {
    hasil[v.paslon] = (hasil[v.paslon] || 0) + 1;
  });
  res.json(hasil);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));