const articles = [
    {
        id: 212341,
        image: 'https://1.bp.blogspot.com/-oF1aji0vAxE/WhOjIE06HhI/AAAAAAAAD1c/Qo-4VS1-xpU4xu8bNhdFNpItw5iUxW5SQCEwYBhgL/s1600/MEREKA.jpg',
        title: 'Contoh yang baik',
        describe: 'Anak tidak pandai mendengarkan, tetapi pandai meniru. Seperti contoh kecil, jika anda sering membuang sampah sembarangan, anak akan memperhatikan dan menirunya. Lihat saja para orang tua yang suka marah dan berteriak, anak pun akan meniru apa yang mereka lihat, dengar dan rasakan. Contoh diatas menunjukkan bahwa anak adalah cerminan kedua orang tua. Oleh karenanya, kematangan mental seseorang sangat penting sebelum menikah agar kelak ketika menjadi orang tua mereka bisa menjadi contoh yang baik.',
    },
    {
        id: 298976,
        image: 'https://1.bp.blogspot.com/-oF1aji0vAxE/WhOjIE06HhI/AAAAAAAAD1c/Qo-4VS1-xpU4xu8bNhdFNpItw5iUxW5SQCEwYBhgL/s1600/MEREKA.jpg',
        title: 'Bermain',
        describe: 'Anak-anak belum mengenal konsep ibu atau ayah. Yang mereka ketahui adalah sosok yang mengajak mereka bermain dan melindungi mereka. Oleh karena itu, sebagai orang tua harus menjadi teman yang memahami keinginan anak. Misalnya, anak yang ada di usia bermain, ajak lah mereka bermain, jangan dipaksa terlalu lama untuk belajar.',
    },
    {
        id: 265743,
        image: 'https://1.bp.blogspot.com/-oF1aji0vAxE/WhOjIE06HhI/AAAAAAAAD1c/Qo-4VS1-xpU4xu8bNhdFNpItw5iUxW5SQCEwYBhgL/s1600/MEREKA.jpg',
        title: 'Kalimat anjuran bukan kalimat perintah',
        describe: 'Kalimat perintah yang sering digunakan oleh orang tua yaitu "jangan a/b", akan menimbulkan konotasi negatif dan tidak berdampak optimal bagi anak. Ubahlah kalimat larangan menjadi kalimat anjuran seperti, "jalan palan-pelan, dll" usahakan lah menghindari kata "jangan". Usahakan juga selalu berbicara menggunakan nada rendah, bukan teriakan. Hal ini sangat mempengaruhi mental anak. ',
    },
    {
        id: 276204,
        image: 'https://1.bp.blogspot.com/-oF1aji0vAxE/WhOjIE06HhI/AAAAAAAAD1c/Qo-4VS1-xpU4xu8bNhdFNpItw5iUxW5SQCEwYBhgL/s1600/MEREKA.jpg',
        title: 'Dukungan pada anak',
        describe: 'Anak terlahir dengan bakat masing-masing. Bisa jadi bakat tersebut sama dengan orang tua atau bisa juga sangat berbeda. Apapun itu, orang tua perlu mendukung mereka untuk menggeluti bidang yang mereka sukai. Cara ini adalah langkah paling efektif untuk membantu kesuksesan anak. Selama hobi anak positif, tidak ada alasan orang tua tidak memberikan dukungan. Hindari mendikte anak karena tindakan tersebut hanya akan membuat anak tertekan dan tidak bertumbuh dengan maksimal.',
    },
    {
        id: 285674,
        image: 'https://1.bp.blogspot.com/-oF1aji0vAxE/WhOjIE06HhI/AAAAAAAAD1c/Qo-4VS1-xpU4xu8bNhdFNpItw5iUxW5SQCEwYBhgL/s1600/MEREKA.jpg',
        title: 'Mengenalkan pentingnya berbagi',
        describe: 'Sebagai anak kecil, mereka belum memahami makna berbagai dan memberi, peran orang tua sangat penting untuk mencontohkan tindakan tersebut. Contohkan dengan hal kecil yaitu, memberikan sisa tulang ikan kepada kucing, memberikan contoh dan penjelasan manfaat dari berbagi makanan kepada orang lain/teman.',
    }
];

function getAllArticles() {
    return articles;
}

function getArticle(id) {
    if (!id) {
      return null;
    }
  
    const filteredArticles = articles.filter((article) => article.id === id);
  
    if (!filteredArticles.length) {
      return null;
    }
  
    return filteredArticles[0];
  }

export { getAllArticles, getArticle };
