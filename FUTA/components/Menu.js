import { useEffect, useState } from 'react';

export default function MenuComponent() {

  useEffect(() => {
    // Hàm cập nhật chiều cao dựa trên kích thước màn hình
    const updateMenu = () => {
      const navbarMenu = document.getElementById('navbarMenu');
      const navbarToggler = document.querySelector('.navbar-toggler');
      const togglerIcon = navbarToggler.querySelector('i');
      const navbarLinks = document.getElementsByClassName('navbar__link');

      // Lắng nghe sự kiện khi menu được hiển thị
      navbarMenu.addEventListener('show.bs.collapse', function () {
        // Đổi icon thành dấu X
        togglerIcon.classList.remove('fa-bars');
        togglerIcon.classList.add('fa-times');
        Array.from(navbarLinks).forEach(link => {
        link.style.width = 'auto'; // hoặc link.style.width = '';
        });
      });

      // Lắng nghe sự kiện khi menu bị ẩn đi
      navbarMenu.addEventListener('hide.bs.collapse', function () {
        // Đổi icon trở lại hamburger
        togglerIcon.classList.remove('fa-times');
        togglerIcon.classList.add('fa-bars');
        //config_navbar();
      });

      // Đóng menu khi click bên ngoài (chỉ áp dụng khi menu đang mở)
      document.addEventListener('click', function (event) {
        // Kiểm tra xem click có nằm ngoài navbar hay không
        const isClickInside = navbarMenu.contains(event.target) || navbarToggler.contains(event.target);
        if (!isClickInside && navbarToggler.getAttribute('aria-expanded') === 'true') {
        // Kích hoạt nút toggler để đóng menu
        navbarToggler.click();
        }
      });
    };

    updateMenu();
  }, []);

  return (
    <nav className="navbar navbar-expand-xl navbar-light">
        <button className="navbar-toggler border-0 mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars fs-3"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
          <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="#" className="navbar__link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg><span>Home</span></a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg><span>Messages</span></a>        
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg><span>Customers</span></a>        
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg><span>Projects</span></a>        
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-archive"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg><span>Resources</span></a>        
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><span>Help</span></a>        
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg><span>Settings</span></a>        
          </li>
          </ul>
        </div>
      </nav>
  );
}