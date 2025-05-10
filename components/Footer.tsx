export default function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-background border-t">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-medium">
              kafe.
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KAFE. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}