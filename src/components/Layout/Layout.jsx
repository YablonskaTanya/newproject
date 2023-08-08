import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

import { nanoid } from "nanoid";

import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import FormLogin from "../FormLogin/FormLogin";
import { Suspense } from "react";

const Layout = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };
  const createUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log("newUser :>> ", newUser);
  };

  return (
    <div className="container">
      <Toaster position="top-right" toastOption={{ duration: 1500 }} />
      <Header showModal={showModal} />
      <Suspense>
        <Outlet />
      </Suspense>

      {isShowModal && (
        <Modal closeModal={closeModal}>
          <FormLogin createUser={createUser} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Layout;
