// Xử lý dropdown tài khoản
const accountToggle = document.getElementById('account-toggle');
const accountDropdown = document.getElementById('account-dropdown');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const closeModals = document.querySelectorAll('.modal-close');

document.addEventListener('DOMContentLoaded', function() {
    const bannerBtn = document.querySelector('.banner-btn');
  
    if (bannerBtn) {
      bannerBtn.addEventListener('click', function() {
        window.location.href = '/html/all.html';
      });
    }
  });

if (accountToggle && accountDropdown) {
    accountToggle.addEventListener('click', (e) => {
        e.preventDefault();
        accountDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!accountToggle.contains(e.target) && !accountDropdown.contains(e.target)) {
            accountDropdown.classList.add('hidden');
        }
    });
}

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/html/login.html'; //link đến login
    accountDropdown.classList.add('hidden');
});

registerBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    window.location.href = '/html/register.html'; //link đến regis
    accountDropdown.classList.add('hidden');
});

//form đăng nhập
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !password) {
            alert('Vui lòng điền đầy đủ thông tin!');
        } else if (username.length < 3) {
            alert('Tên đăng nhập phải dài ít nhất 3 ký tự!');
        } else if (password.length < 6) {
            alert('Mật khẩu phải dài ít nhất 6 ký tự!');
        } else {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.username === username && user.password === password) {
                alert(`Đăng nhập thành công với tài khoản: ${username}`);
                loginModal.classList.add('hidden');
            } else {
                alert('Tên đăng nhập hoặc mật khẩu không đúng!');
            }
        }
    });
}

//form đăng ký
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('reg-username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('reg-password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!username || !email || !password || !confirmPassword) {
            alert('Vui lòng điền đầy đủ thông tin!');
        } else if (username.length < 3) {
            alert('Tên đăng nhập phải dài ít nhất 3 ký tự!');
        } else if (!emailRegex.test(email)) {
            alert('Email không hợp lệ!');
        } else if (password.length < 6) {
            alert('Mật khẩu phải dài ít nhất 6 ký tự!');
        } else if (password !== confirmPassword) {
            alert('Mật khẩu xác nhận không khớp!');
        } else {
            const user = { username, email, password };
            localStorage.setItem('user', JSON.stringify(user));
            alert(`Đăng ký thành công với tài khoản: ${username}`);
            registerModal.classList.add('hidden');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('.product-item');
  
    productItems.forEach(function(item) {
      item.addEventListener('click', function() {
        window.location.href = '/html/buy.html';
      });
    });
});