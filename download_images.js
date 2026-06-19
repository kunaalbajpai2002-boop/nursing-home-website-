const fs = require('fs');
const path = require('path');
const https = require('https');

// Helper to download an image
function downloadImage(url, localPath) {
  const dest = path.join(__dirname, 'public', localPath);
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) {
      console.log(`[Exists] ${localPath}`);
      return resolve(localPath);
    }

    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        fs.unlink(dest, () => {});
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`[Downloaded] ${localPath}`);
          resolve(localPath);
        });
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

// Mappings & Replacements config
const jobs = [
  // ──── Hero Slider (components/hero-section.tsx) ────
  {
    file: 'components/hero-section.tsx',
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920&h=1080',
    local: '/images/hero/slide-1.jpg',
    search: "image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920&h=1080'",
    replace: "image: '/images/hero/slide-1.jpg'"
  },
  {
    file: 'components/hero-section.tsx',
    url: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=1920&h=1080',
    local: '/images/hero/slide-2.jpg',
    search: "image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=1920&h=1080'",
    replace: "image: '/images/hero/slide-2.jpg'"
  },
  {
    file: 'components/hero-section.tsx',
    url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1920&h=1080',
    local: '/images/hero/slide-3.jpg',
    search: "image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1920&h=1080'",
    replace: "image: '/images/hero/slide-3.jpg'"
  },
  {
    file: 'components/hero-section.tsx',
    url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1920&h=1080',
    local: '/images/hero/slide-4.jpg',
    search: "image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1920&h=1080'",
    replace: "image: '/images/hero/slide-4.jpg'"
  },
  {
    file: 'components/hero-section.tsx',
    url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1920&h=1080',
    local: '/images/hero/slide-5.jpg',
    search: "image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1920&h=1080'",
    replace: "image: '/images/hero/slide-5.jpg'"
  },

  // ──── Gynaecology homepage services (components/services-section.tsx) ────
  {
    file: 'components/services-section.tsx',
    url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/gynae/deliveries.jpg',
    search: "title: 'All Kinds of Deliveries (Including High-Risk)',\n    slug: 'deliveries',\n    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'All Kinds of Deliveries (Including High-Risk)',\n    slug: 'deliveries',\n    image: '/images/gynae/deliveries.jpg'"
  },
  {
    file: 'components/services-section.tsx',
    url: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/gynae/gynae-surgeries.jpg',
    search: "title: 'All Gynae Surgeries',\n    slug: 'gynae-surgeries',\n    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'All Gynae Surgeries',\n    slug: 'gynae-surgeries',\n    image: '/images/gynae/gynae-surgeries.jpg'"
  },
  {
    file: 'components/services-section.tsx',
    url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/gynae/laparoscopic.jpg',
    search: "title: 'Laparoscopic & Robotic Gynae Surgeries',\n    slug: 'laparoscopic-robotic-surgeries',\n    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Laparoscopic & Robotic Gynae Surgeries',\n    slug: 'laparoscopic-robotic-surgeries',\n    image: '/images/gynae/laparoscopic.jpg'"
  },
  {
    file: 'components/services-section.tsx',
    url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/gynae/cosmetic.jpg',
    search: "title: 'Cosmetic Gynaecology',\n    slug: 'cosmetic-gynaecology',\n    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Cosmetic Gynaecology',\n    slug: 'cosmetic-gynaecology',\n    image: '/images/gynae/cosmetic.jpg'"
  },
  {
    file: 'components/services-section.tsx',
    url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/gynae/infertility.jpg',
    search: "title: 'Infertility Treatment',\n    slug: 'infertility-treatment',\n    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Infertility Treatment',\n    slug: 'infertility-treatment',\n    image: '/images/gynae/infertility.jpg'"
  },
  {
    file: 'components/services-section.tsx',
    url: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/gynae/preventive-health.jpg',
    search: "title: 'Preventive Health Checks',\n    slug: 'preventive-health-checks',\n    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Preventive Health Checks',\n    slug: 'preventive-health-checks',\n    image: '/images/gynae/preventive-health.jpg'"
  },

  // ──── Main services page (app/services/page.tsx) ────
  // Gynae cards in app/services/page.tsx
  {
    file: 'app/services/page.tsx',
    url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/gynae/deliveries.jpg',
    search: "title: 'All Kinds of Deliveries (Including High-Risk)',\n    slug: 'deliveries',\n    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'All Kinds of Deliveries (Including High-Risk)',\n    slug: 'deliveries',\n    image: '/images/gynae/deliveries.jpg'"
  },
  {
    file: 'app/services/page.tsx',
    url: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/gynae/gynae-surgeries.jpg',
    search: "title: 'All Gynae Surgeries',\n    slug: 'gynae-surgeries',\n    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'All Gynae Surgeries',\n    slug: 'gynae-surgeries',\n    image: '/images/gynae/gynae-surgeries.jpg'"
  },
  {
    file: 'app/services/page.tsx',
    url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/gynae/laparoscopic.jpg',
    search: "title: 'Laparoscopic & Robotic Gynae Surgeries',\n    slug: 'laparoscopic-robotic-surgeries',\n    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Laparoscopic & Robotic Gynae Surgeries',\n    slug: 'laparoscopic-robotic-surgeries',\n    image: '/images/gynae/laparoscopic.jpg'"
  },
  {
    file: 'app/services/page.tsx',
    url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/gynae/cosmetic.jpg',
    search: "title: 'Cosmetic Gynaecology',\n    slug: 'cosmetic-gynaecology',\n    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Cosmetic Gynaecology',\n    slug: 'Cosmetic Gynaecology',\n    image: '/images/gynae/cosmetic.jpg'"
  },
  {
    file: 'app/services/page.tsx',
    url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/gynae/infertility.jpg',
    search: "title: 'Infertility Treatment',\n    slug: 'infertility-treatment',\n    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Infertility Treatment',\n    slug: 'infertility-treatment',\n    image: '/images/gynae/infertility.jpg'"
  },
  {
    file: 'app/services/page.tsx',
    url: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/gynae/preventive-health.jpg',
    search: "title: 'Preventive Health Checks',\n    slug: 'preventive-health-checks',\n    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Preventive Health Checks',\n    slug: 'preventive-health-checks',\n    image: '/images/gynae/preventive-health.jpg'"
  },

  // Pediatrics cards in app/services/page.tsx
  {
    file: 'app/services/page.tsx',
    url: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/pediatrics/care.jpg',
    search: "title: 'Pediatric Care',\n    slug: 'pediatric-care',\n    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Pediatric Care',\n    slug: 'pediatric-care',\n    image: '/images/pediatrics/care.jpg'"
  },
  {
    file: 'app/services/page.tsx',
    url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/pediatrics/neonatal.jpg',
    search: "title: 'Newborn / Neonatal Care',\n    slug: 'neonatal-care',\n    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Newborn / Neonatal Care',\n    slug: 'neonatal-care',\n    image: '/images/pediatrics/neonatal.jpg'"
  },
  {
    file: 'app/services/page.tsx',
    url: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/pediatrics/vaccinations.jpg',
    search: "title: 'Vaccinations',\n    slug: 'vaccinations',\n    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Vaccinations',\n    slug: 'vaccinations',\n    image: '/images/pediatrics/vaccinations.jpg'"
  },
  {
    file: 'app/services/page.tsx',
    url: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/pediatrics/hospitalization.jpg',
    search: "title: 'Hospitalization for Pediatric Illnesses',\n    slug: 'pediatric-hospitalization',\n    image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Hospitalization for Pediatric Illnesses',\n    slug: 'pediatric-hospitalization',\n    image: '/images/pediatrics/hospitalization.jpg'"
  },
  {
    file: 'app/services/page.tsx',
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/pediatrics/nicu.jpg',
    search: "title: 'PICU / NICU Care',\n    slug: 'nicu-care',\n    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'PICU / NICU Care',\n    slug: 'nicu-care',\n    image: '/images/pediatrics/nicu.jpg'"
  },
  {
    file: 'app/services/page.tsx',
    url: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/pediatrics/health-checks.jpg',
    search: "title: 'Preventive Health Checks',\n    slug: 'pediatric-health-checks',\n    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Preventive Health Checks',\n    slug: 'pediatric-health-checks',\n    image: '/images/pediatrics/health-checks.jpg'"
  },

  // ──── Pediatric Section on Homepage (components/pediatric-services-section.tsx) ────
  {
    file: 'components/pediatric-services-section.tsx',
    url: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/pediatrics/care.jpg',
    search: "title: 'Pediatric Care',\n    slug: 'pediatric-care',\n    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Pediatric Care',\n    slug: 'pediatric-care',\n    image: '/images/pediatrics/care.jpg'"
  },
  {
    file: 'components/pediatric-services-section.tsx',
    url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/pediatrics/neonatal.jpg',
    search: "title: 'Newborn / Neonatal Care',\n    slug: 'neonatal-care',\n    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Newborn / Neonatal Care',\n    slug: 'neonatal-care',\n    image: '/images/pediatrics/neonatal.jpg'"
  },
  {
    file: 'components/pediatric-services-section.tsx',
    url: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/pediatrics/vaccinations.jpg',
    search: "title: 'Vaccinations',\n    slug: 'vaccinations',\n    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Vaccinations',\n    slug: 'vaccinations',\n    image: '/images/pediatrics/vaccinations.jpg'"
  },
  {
    file: 'components/pediatric-services-section.tsx',
    url: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/pediatrics/hospitalization.jpg',
    search: "title: 'Hospitalization for Pediatric Illnesses',\n    slug: 'pediatric-hospitalization',\n    image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Hospitalization for Pediatric Illnesses',\n    slug: 'pediatric-hospitalization',\n    image: '/images/pediatrics/hospitalization.jpg'"
  },
  {
    file: 'components/pediatric-services-section.tsx',
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/pediatrics/nicu.jpg',
    search: "title: 'PICU / NICU Care',\n    slug: 'nicu-care',\n    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'PICU / NICU Care',\n    slug: 'nicu-care',\n    image: '/images/pediatrics/nicu.jpg'"
  },
  {
    file: 'components/pediatric-services-section.tsx',
    url: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/pediatrics/health-checks.jpg',
    search: "title: 'Preventive Health Checks',\n    slug: 'pediatric-health-checks',\n    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "title: 'Preventive Health Checks',\n    slug: 'pediatric-health-checks',\n    image: '/images/pediatrics/health-checks.jpg'"
  },

  // ──── Dynamic Service Detail Page (app/services/[slug]/page.tsx) ────
  {
    file: 'app/services/[slug]/page.tsx',
    url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800&h=500',
    local: '/images/gynae/deliveries.jpg',
    search: "image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800&h=500'",
    replace: "image: '/images/gynae/deliveries.jpg'"
  },
  {
    file: 'app/services/[slug]/page.tsx',
    url: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800&h=500',
    local: '/images/gynae/gynae-surgeries.jpg',
    search: "'gynae-surgeries': {\n    title: 'All Gynae Surgeries',\n    tagline: 'Comprehensive surgical care for gynaecological conditions',\n    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800&h=500'",
    replace: "'gynae-surgeries': {\n    title: 'All Gynae Surgeries',\n    tagline: 'Comprehensive surgical care for gynaecological conditions',\n    image: '/images/gynae/gynae-surgeries.jpg'"
  },
  {
    file: 'app/services/[slug]/page.tsx',
    url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800&h=500',
    local: '/images/gynae/laparoscopic.jpg',
    search: "image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800&h=500'",
    replace: "image: '/images/gynae/laparoscopic.jpg'"
  },
  {
    file: 'app/services/[slug]/page.tsx',
    url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800&h=500',
    local: '/images/gynae/cosmetic.jpg',
    search: "image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800&h=500'",
    replace: "image: '/images/gynae/cosmetic.jpg'"
  },
  {
    file: 'app/services/[slug]/page.tsx',
    url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800&h=500',
    local: '/images/gynae/infertility.jpg',
    search: "image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800&h=500'",
    replace: "image: '/images/gynae/infertility.jpg'"
  },
  {
    file: 'app/services/[slug]/page.tsx',
    url: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=800&h=500',
    local: '/images/gynae/preventive-health.jpg',
    search: "image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=800&h=500'",
    replace: "image: '/images/gynae/preventive-health.jpg'"
  },
  {
    file: 'app/services/[slug]/page.tsx',
    url: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800&h=500',
    local: '/images/pediatrics/care.jpg',
    search: "image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800&h=500'",
    replace: "image: '/images/pediatrics/care.jpg'"
  },
  {
    file: 'app/services/[slug]/page.tsx',
    url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800&h=500',
    local: '/images/pediatrics/neonatal.jpg',
    search: "image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800&h=500'",
    replace: "image: '/images/pediatrics/neonatal.jpg'"
  },
  {
    file: 'app/services/[slug]/page.tsx',
    url: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=800&h=500',
    local: '/images/pediatrics/vaccinations.jpg',
    search: "image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=800&h=500'",
    replace: "image: '/images/pediatrics/vaccinations.jpg'"
  },
  {
    file: 'app/services/[slug]/page.tsx',
    url: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800&h=500',
    local: '/images/pediatrics/hospitalization.jpg',
    search: "image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800&h=500'",
    replace: "image: '/images/pediatrics/hospitalization.jpg'"
  },
  {
    file: 'app/services/[slug]/page.tsx',
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=500',
    local: '/images/pediatrics/nicu.jpg',
    search: "image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=500'",
    replace: "image: '/images/pediatrics/nicu.jpg'"
  },
  {
    file: 'app/services/[slug]/page.tsx',
    url: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800&h=500',
    local: '/images/pediatrics/health-checks.jpg',
    search: "'pediatric-health-checks': {\n    title: 'Preventive Health Checks',\n    tagline: 'Proactive screenings to monitor growth, development, and wellness',\n    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800&h=500'",
    replace: "'pediatric-health-checks': {\n    title: 'Preventive Health Checks',\n    tagline: 'Proactive screenings to monitor growth, development, and wellness',\n    image: '/images/pediatrics/health-checks.jpg'"
  },

  // ──── Facilities Section (components/facilities-section.tsx) ────
  {
    file: 'components/facilities-section.tsx',
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/facilities/icu-care.jpg',
    search: "image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "image: '/images/facilities/icu-care.jpg'"
  },
  {
    file: 'components/facilities-section.tsx',
    url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/facilities/private-rooms.jpg',
    search: "image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "image: '/images/facilities/private-rooms.jpg'"
  },
  {
    file: 'components/facilities-section.tsx',
    url: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/facilities/emergency-services.jpg',
    search: "image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "image: '/images/facilities/emergency-services.jpg'"
  },
  {
    file: 'components/facilities-section.tsx',
    url: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/facilities/diagnostics.jpg',
    search: "image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "image: '/images/facilities/diagnostics.jpg'"
  },
  {
    file: 'components/facilities-section.tsx',
    url: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/facilities/pharmacy.jpg',
    search: "image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "image: '/images/facilities/pharmacy.jpg'"
  },
  {
    file: 'components/facilities-section.tsx',
    url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600&h=400',
    local: '/images/facilities/ambulance-services.jpg',
    search: "image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600&h=400'",
    replace: "image: '/images/facilities/ambulance-services.jpg'"
  },

  // ──── Testimonials (components/testimonials-section.tsx) ────
  {
    file: 'components/testimonials-section.tsx',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    local: '/images/testimonials/user-1.jpg',
    search: "image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'",
    replace: "image: '/images/testimonials/user-1.jpg'"
  },
  {
    file: 'components/testimonials-section.tsx',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    local: '/images/testimonials/user-2.jpg',
    search: "image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'",
    replace: "image: '/images/testimonials/user-2.jpg'"
  },
  {
    file: 'components/testimonials-section.tsx',
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    local: '/images/testimonials/user-3.jpg',
    search: "image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'",
    replace: "image: '/images/testimonials/user-3.jpg'"
  }
];

async function main() {
  console.log('Starting images downloader...');
  
  // Group jobs by local path to avoid downloading the same file multiple times
  const uniqueDownloads = {};
  jobs.forEach(job => {
    uniqueDownloads[job.local] = job.url;
  });

  // Download all unique files
  const localFiles = Object.keys(uniqueDownloads);
  for (const localPath of localFiles) {
    const url = uniqueDownloads[localPath];
    try {
      await downloadImage(url, localPath);
    } catch (err) {
      console.error(`Error downloading ${url} to ${localPath}:`, err.message);
    }
  }

  console.log('\nStarting string replacements in files...');

  // Group replacements by file so we read/write each file only once
  const replacementsByFile = {};
  jobs.forEach(job => {
    if (!replacementsByFile[job.file]) {
      replacementsByFile[job.file] = [];
    }
    replacementsByFile[job.file].push(job);
  });

  for (const file of Object.keys(replacementsByFile)) {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${file}`);
      continue;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let replacementsCount = 0;

    replacementsByFile[file].forEach(rep => {
      if (content.includes(rep.search)) {
        content = content.replace(rep.search, rep.replace);
        replacementsCount++;
      } else {
        // Try fallback if double/single quotes are different
        const normalizedSearch = rep.search.replace(/'/g, '"');
        const normalizedReplace = rep.replace.replace(/'/g, '"');
        if (content.includes(normalizedSearch)) {
          content = content.replace(normalizedSearch, normalizedReplace);
          replacementsCount++;
        } else {
          console.warn(`[Warning] Search string not found in ${file}: "${rep.search.substring(0, 50)}..."`);
        }
      }
    });

    if (replacementsCount > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`[Replaced] Applied ${replacementsCount} image updates in ${file}`);
    }
  }

  console.log('\nFinished downloading images and updating code references.');
}

main().catch(err => {
  console.error('Fatal error:', err);
});
