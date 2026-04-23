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
        <section className="hero" style={{ padding: '6rem 0 4rem', backgroundColor: '#fff' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <span style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'inline-block', border: '1px solid var(--primary)', padding: '0.25rem 1rem', borderRadius: '9999px' }}>
              Pie Medical Imaging
            </span>
            <h1 className="hero-title" style={{ fontSize: '4rem', fontWeight: 300, lineHeight: 1.1, maxWidth: '900px', marginBottom: '1.5rem' }}>
              Solutions in cardiovascular <br />
              <span style={{ fontWeight: 500, color: 'var(--primary)' }}>analysis</span>
            </h1>
            <p className="hero-subtitle text-center" style={{ fontSize: '1.125rem', color: 'var(--text-muted)', fontWeight: 300, maxWidth: '700px', marginBottom: '2.5rem' }}>
              We provide cardiovascular image analysis solutions which assist the medical professional to improve patient treatment.
            </p>
            <div className="hero-actions" style={{ marginBottom: '4rem' }}>
              <Link href="#demo" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>Request a demo</Link>
              <Link href="#markets" className="btn btn-outline" style={{ fontSize: '1rem', padding: '0.875rem 2rem', color: '#1c1c1c' }}>Explore Markets</Link>
            </div>
            
            <div style={{ width: '100%', maxWidth: '1000px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
              <img src="https://www.piemedicalimaging.com/application/files/cache/thumbnails/monitor-qardia-6a404bf582ddab9cb096cd0307521c0a.png" alt="Qardia Monitor" style={{ width: '100%', display: 'block' }} />
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
