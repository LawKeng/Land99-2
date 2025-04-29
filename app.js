// กำหนด URL ของ Google Sheets ที่เชื่อมมา
const sheetURL = 'https://docs.google.com/spreadsheets/d/1XNpfXtlJT_KLbJ6VakJu0WAKzEDCabzGG0E1JhpToF0/edit?usp=sharing';

// เมื่อโหลดหน้า index.html
if (window.location.pathname.includes('index.html')) {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      // ถ้าไม่ได้ล็อกอิน ให้ซ่อนปุ่ม logout
      document.getElementById('logoutSection').style.display = 'none';
    } else {
      // ถ้าเป็น Admin โชว์ปุ่ม Logout
      document.getElementById('logoutSection').style.display = 'block';
    }
  });

  document.getElementById('logoutBtn').addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
      window.location.href = 'login.html';
    });
  });

  fetch(sheetURL)
    .then(res => res.text())
    .then(rep => {
      const data = JSON.parse(rep.substr(47).slice(0, -2));
      const table = document.querySelector('#plotTable tbody');
      data.table.rows.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${row.c[0] ? row.c[0].v : ''}</td>
          <td>${row.c[1] ? row.c[1].v : ''}</td>
          <td>${row.c[2] ? row.c[2].v : ''}</td>
        `;
        table.appendChild(tr);
      });
    });

  // ระบบค้นหา
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toUpperCase();
    const trs = document.querySelectorAll("#plotTable tbody tr");
    trs.forEach(tr => {
      let text = tr.textContent.toUpperCase();
      tr.style.display = text.includes(filter) ? "" : "none";
    });
  });
}
