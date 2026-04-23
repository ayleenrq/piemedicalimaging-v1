import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header" style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container nav-container">
          <Link href="/" className="logo">
            <img src="https://www.piemedicalimaging.com/application/themes/pie/img/logo-pmi.svg" alt="Pie Medical Imaging Logo" style={{ height: '40px' }} />
          </Link>
          <nav className="nav-links">
            <Link href="#markets" className="nav-link">Markets & Products</Link>
            <Link href="#news" className="nav-link">News & Events</Link>
            <Link href="#support" className="nav-link">Support & Training</Link>
            <Link href="#about" className="nav-link">About & Jobs</Link>
          </nav>
          <div>
            <Link href="#demo" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.875rem' }}>Request a demo</Link>
          </div>
        </div>
      </header>

      <main>
        {/* Section 1: Hero */}
        <section className="hero" style={{
          padding: '6rem 0 4rem',
          backgroundColor: '#fff',
          backgroundImage: 'linear-gradient(rgba(230, 0, 0, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(230, 0, 0, 0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          backgroundPosition: 'center center'
        }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexDirection: 'row' }}>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'inline-block', border: '1px solid var(--primary)', padding: '0.25rem 1rem', borderRadius: '9999px' }}>
                Pie Medical Imaging
              </span>
              <h1 className="hero-title" style={{ fontSize: '3.5rem', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '100%', margin: '0 0 1.5rem 0' }}>
                Solutions in cardiovascular <br />
                <span style={{ fontWeight: 500, color: 'var(--primary)' }}>analysis</span>
              </h1>
              <p className="hero-subtitle" style={{ fontSize: '1.125rem', color: 'var(--text-muted)', fontWeight: 300, marginBottom: '2.5rem', maxWidth: '500px', margin: '0 0 2.5rem 0' }}>
                We provide cardiovascular image analysis solutions which assist the medical professional to improve patient treatment.
              </p>
              <div className="hero-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start' }}>
                <Link href="#demo" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>Request a demo</Link>
                <Link href="#markets" className="btn btn-outline" style={{ fontSize: '1rem', padding: '0.875rem 2rem', color: '#1c1c1c' }}>Explore Markets</Link>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ width: '100%', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
                <img src="https://www.piemedicalimaging.com/application/files/cache/thumbnails/monitor-qardia-6a404bf582ddab9cb096cd0307521c0a.png" alt="Qardia Monitor" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Products */}
        <section id="products" className="section" style={{ backgroundColor: 'var(--bg-light)', padding: '6rem 0' }}>
          <div className="container text-center mb-12">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '1rem' }}>Featured Products</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300, maxWidth: '600px', margin: '0 auto' }}>
              Advanced software solutions for cardiovascular and structural heart imaging.
            </p>
          </div>

          <div className="container">
            <div className="grid-3">
              {/* Product 1: vFFR */}
              <div className="product-card" style={{ backgroundColor: '#fff', padding: '2.5rem 2rem', borderRadius: '1rem', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                <img src="https://www.piemedicalimaging.com/application/themes/pie/img/CAAS_logo.svg" alt="CAAS" style={{ height: '30px', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem' }}>vFFR</h3>
                <p style={{ color: 'var(--text-muted)', fontWeight: 300, fontSize: '0.95rem', marginBottom: '2rem', flexGrow: 1 }}>
                  Caas vFFR calculates the pressure drop in coronary vessels without the need of a pressure wire. The vFFR module builds a 3D reconstruction of two angiograms and assesses pressure drop, resulting in a vFFR value.
                </p>
                <Link href="#" className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--primary)', color: 'var(--primary)' }}>More info</Link>
              </div>

              {/* Product 2: Aortic Valve */}
              <div className="product-card" style={{ backgroundColor: '#fff', padding: '2.5rem 2rem', borderRadius: '1rem', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                <img src="https://www.piemedicalimaging.com/application/themes/pie/img/3MENSIO_logo.svg" alt="3mensio" style={{ height: '30px', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem' }}>Aortic Valve</h3>
                <p style={{ color: 'var(--text-muted)', fontWeight: 300, fontSize: '0.95rem', marginBottom: '2rem', flexGrow: 1 }}>
                  The 3mensio Aortic Valve workflow provides a quick, easy and reliable way to plan and size for aortic valve replacement. The intuitive workflow assistant guides the user through the CT image analysis to obtain the needed measurements.
                </p>
                <Link href="#" className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--primary)', color: 'var(--primary)' }}>More info</Link>
              </div>

              {/* Product 3: Qardia */}
              <div className="product-card" style={{ backgroundColor: '#fff', padding: '2.5rem 2rem', borderRadius: '1rem', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                <img src="https://www.piemedicalimaging.com/application/themes/pie/img/CAAS_logo.svg" alt="CAAS" style={{ height: '30px', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem' }}>Qardia</h3>
                <p style={{ color: 'var(--text-muted)', fontWeight: 300, fontSize: '0.95rem', marginBottom: '2rem', flexGrow: 1 }}>
                  Complete analysis and reporting of 2D transthoracic echocardiography studies using just your web browser! No local installation is required.
                </p>
                <Link href="#" className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--primary)', color: 'var(--primary)' }}>More info</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Markets */}
        <section id="markets" className="section" style={{ padding: '6rem 0' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 300 }}>Our Markets</h2>
                <p style={{ color: 'var(--text-muted)', fontWeight: 300, fontSize: '1rem', marginTop: '0.5rem' }}>
                  Choose a market below to get more information.
                </p>
              </div>
              <Link href="#" style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                View all markets <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>

            <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem' }}>
              <Link href="#" className="market-card" style={{ display: 'block', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid var(--border-color)', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ backgroundColor: 'var(--bg-light)', padding: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <img src="https://www.piemedicalimaging.com/application/themes/pie/img/markets/percutaneous_coronary_intervention@2x.png" alt="Percutaneous Intervention" style={{ height: '80px', objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 500 }}>Percutaneous Intervention</h3>
                </div>
              </Link>

              <Link href="#" className="market-card" style={{ display: 'block', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid var(--border-color)', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ backgroundColor: 'var(--bg-light)', padding: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <img src="https://www.piemedicalimaging.com/application/themes/pie/img/markets/cardiac_mri@2x.png" alt="Cardiac Diagnostics" style={{ height: '80px', objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 500 }}>Cardiac Diagnostics</h3>
                </div>
              </Link>

              <Link href="#" className="market-card" style={{ display: 'block', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid var(--border-color)', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ backgroundColor: 'var(--bg-light)', padding: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <img src="https://www.piemedicalimaging.com/application/themes/pie/img/markets/structural_heart_disease@2x.png" alt="Structural Heart" style={{ height: '80px', objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 500 }}>Structural Heart</h3>
                </div>
              </Link>

              <Link href="#" className="market-card" style={{ display: 'block', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid var(--border-color)', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ backgroundColor: 'var(--bg-light)', padding: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <img src="https://www.piemedicalimaging.com/application/themes/pie/img/markets/vascular_surgery@2x.png" alt="Vascular Surgery" style={{ height: '80px', objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 500 }}>Vascular Surgery</h3>
                </div>
              </Link>

              <Link href="#" className="market-card" style={{ display: 'block', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid var(--border-color)', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ backgroundColor: 'var(--bg-light)', padding: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <img src="https://www.piemedicalimaging.com/application/themes/pie/img/markets/research_other@2x.png" alt="Research / Other" style={{ height: '80px', objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 500 }}>Research / Other</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Support & Training Section (Zig-zag Layout like reference) */}
      <section id="support" className="section" style={{ padding: '6rem 0', backgroundColor: '#fff' }}>
        <div className="container text-center mb-16">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '1rem' }}>Support & Training</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300, maxWidth: '600px', margin: '0 auto' }}>
            Step-by-step guidance and comprehensive learning for our solutions.
          </p>
        </div>

        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', marginBottom: '4rem' }}>
            <div style={{ flex: 1 }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500, marginBottom: '1.5rem', fontSize: '1.125rem' }}>1</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem' }}>Documentation & Demo</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.6 }}>Request a demo or explore our extensive documentation to fully understand how our cardiovascular imaging solutions fit perfectly into your daily workflow.</p>
            </div>
            <div style={{ flex: 1, borderRadius: '1rem', overflow: 'hidden' }}>
              <img src="https://www.piemedicalimaging.com/application/files/cache/thumbnails/cws-93-thumbnail-51dfcc45d9f5bc2e15212b51c6ce3fda.png" alt="Documentation" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexDirection: 'row-reverse' }}>
            <div style={{ flex: 1 }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500, marginBottom: '1.5rem', fontSize: '1.125rem' }}>2</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem' }}>PMI Academy</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.6 }}>Join the PMI Academy for comprehensive training modules, ensuring you get the most out of our software products and certifications.</p>
            </div>
            <div style={{ flex: 1, borderRadius: '1rem', overflow: 'hidden' }}>
              <img src="https://www.piemedicalimaging.com/application/files/cache/thumbnails/fast3-webpagina-popup-8a1c4270804ee01f0e6b7d8cf9bf2609.png" alt="Training" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section (Testimonial Card Layout like reference) */}
      <section id="news" className="section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-light)' }}>
        <div className="container text-center mb-12">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '1rem' }}>News & Events</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300, maxWidth: '600px', margin: '0 auto' }}>
            Stay up to date with the latest releases and events.
          </p>
        </div>

        <div className="container">
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ backgroundColor: '#fff', padding: '2.5rem', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
              <img src="https://www.piemedicalimaging.com/application/files/cache/thumbnails/europcr-2026-c1f5df07b3d8cc414178cf4e1e4417f3.jpg" alt="EuroPCR" style={{ width: '100%', borderRadius: '0.5rem', marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.5rem' }}>EuroPCR 2026</h4>
              <p style={{ color: 'var(--text-muted)', fontWeight: 300, fontSize: '0.9rem', marginBottom: '1rem' }}>May 19 – May 22, 2026 | Paris, France.</p>
              <Link href="#" style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.875rem' }}>Read more</Link>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '2.5rem', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
              <img src="https://www.piemedicalimaging.com/application/files/cache/thumbnails/charing-cross-2026-e6376ce473f2839e18050c1c155a67e8.jpg" alt="Charing Cross" style={{ width: '100%', borderRadius: '0.5rem', marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.5rem' }}>Charing Cross</h4>
              <p style={{ color: 'var(--text-muted)', fontWeight: 300, fontSize: '0.9rem', marginBottom: '1rem' }}>Apr 21 – Apr 23, 2026 | London, UK.</p>
              <Link href="#" style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.875rem' }}>Read more</Link>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '2.5rem', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
              <img src="https://www.piemedicalimaging.com/application/files/cache/thumbnails/fast-iii-74bdf02b1d51a9e3ac45705f50ff8d95.jpg" alt="FAST III trial" style={{ width: '100%', borderRadius: '0.5rem', marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.5rem' }}>FAST III Trial</h4>
              <p style={{ color: 'var(--text-muted)', fontWeight: 300, fontSize: '0.9rem', marginBottom: '1rem' }}>Demonstrates non-inferiority of CAAS vFFR.</p>
              <Link href="#" style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.875rem' }}>Read more</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer" style={{ backgroundColor: '#111827', padding: '4rem 0 2rem', color: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <img src="https://www.piemedicalimaging.com/application/themes/pie/img/logo-pmi.svg" alt="Pie Medical Imaging Logo" style={{ height: '30px', filter: 'brightness(0) invert(1)', opacity: 0.8, marginBottom: '1.5rem' }} />
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.6 }}>
                We provide cardiovascular image analysis solutions which assist the medical professional to improve patient treatment.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '1rem' }}>Contact Information</h4>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', fontWeight: 300, marginBottom: '0.5rem' }}>Phone: +31 (0)43 – 3 28 13 28</p>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', fontWeight: 300 }}>E-mail: pmi@pie.nl</p>
            </div>

            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '1rem' }}>Technical Support</h4>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', fontWeight: 300, marginBottom: '0.5rem' }}>Phone: +31 (0)30 – 850 02 02</p>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', fontWeight: 300 }}>E-mail: support@pie.nl</p>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #374151', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ color: '#6b7280', fontSize: '0.75rem' }}>© 2018-2026 Pie Medical Imaging B.V.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="#" style={{ color: '#6b7280', fontSize: '0.75rem', textDecoration: 'none' }}>Terms of use</Link>
              <Link href="#" style={{ color: '#6b7280', fontSize: '0.75rem', textDecoration: 'none' }}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
