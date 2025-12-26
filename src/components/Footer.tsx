const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              LV
            </div>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Lakshika Viduranga. All rights reserved.
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
