const logout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
};

export default logout;