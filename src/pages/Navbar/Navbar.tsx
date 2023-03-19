import { useEffect, useState, useCallback } from 'react';
import * as S from 'pages/Navbar/NavbarStyle';
import SideMenu from 'components/SideMenu/SideMenu';
import SearchMenu from 'components/SearchProduct/SearchProduct';
import ModifyUser from 'components/ModifyUser/ModifyUser';
import logoImage from 'image/Navbar/logo_img.jpeg';
import { db } from 'service/firebase_config';
import {  getDocs, collection } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { loadProduct } from 'store/products';
import { RootState } from 'store/store';

function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.user.cart);

  // SideMenu~
  const [sideMenu, setSideMenu] = useState(false);
  const sideMenuToggle = () => {
    setSideMenu(!sideMenu);
  };

  // SearchMenu
  const [searchMenu, setSearchMenu] = useState(false);
  const searchMenuToggle = () => {
    setSearchMenu(!searchMenu);
  };

  //ModifyModal
  const [modifyUserModal, setModifyUserModal] = useState(false);
  const openModifyUserModal = () => {
    sideMenuToggle();
    setModifyUserModal(!modifyUserModal);
  };

  const getProductData = useCallback(async () => {
    const productRef = collection(db, 'products');
    const data = await getDocs(productRef);
    dispatch(loadProduct(data.docs.map((doc) => ({ ...doc.data() }))));
  }, [dispatch]);

  useEffect(() => {
    getProductData();
  }, [getProductData]);

  return (
    <>
      {/* SideMenu */}
      {sideMenu && <SideMenu setSideMenu={setSideMenu} openModifyUserModal={openModifyUserModal} />}
      {/* SearchMenu */}
      {searchMenu && <SearchMenu searchMenuToggle={searchMenuToggle} />}
      {/* ModifyModal */}
      {modifyUserModal && <ModifyUser setModifyUserModal={setModifyUserModal} />}
      {/* Navbar */}
      <S.NavWrapper>
        {/* hamburger bar */}
        <S.NavIcon onClick={sideMenuToggle} />

        {/* main logo */}

        <S.RouterLink to="/">
          <S.NavLogoImage src={logoImage} alt="Title_Image" />
        </S.RouterLink>

        {/* main menu */}
        <S.NavMenus>
          <S.CartLink to="/cart">
            <S.CartBtn />
            {cart && cart?.length !== 0 && <S.CartLength>{cart?.length}</S.CartLength>}
          </S.CartLink>
          <S.SearchBtnDiv>
            <S.SearchBtn onClick={searchMenuToggle} />
          </S.SearchBtnDiv>
        </S.NavMenus>
      </S.NavWrapper>
    </>
  );
}

export default Navbar;
