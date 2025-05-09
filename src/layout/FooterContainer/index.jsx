const FooterContainer = () => {

    const currentYear = new Date().getFullYear();

    return <footer className="text-center text-sm text-gray-500 mt-8">
        © {currentYear} Silverstar. All rights reserved.
    </footer>
};

export default FooterContainer;