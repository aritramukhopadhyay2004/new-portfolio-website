const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          All rights reserved. Built with passion & code by <span className="gradient-text font-semibold">Aritra</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
