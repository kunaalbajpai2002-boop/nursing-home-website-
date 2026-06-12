'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { 
  ArrowLeft, 
  CheckCircle, 
  Calendar, 
  ShieldCheck, 
  Activity, 
  Clock, 
  FileText, 
  Info,
  Layers
} from 'lucide-react';

interface TestInfo {
  title: string;
  tagline: string;
  image: string;
  overview: string;
  purpose: string;
  preparation: string;
  referenceRange: string;
  clinicalSignificance: string;
  faqs: { q: string; a: string }[];
}

const testsData: Record<string, TestInfo> = {
  'amylase-test': {
    title: 'Amylase Test',
    tagline: 'Key pancreatic enzyme evaluation for digestion health',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800&h=500',
    overview: 'An Amylase Test measures the level of amylase in your blood or urine. Amylase is an enzyme produced primarily by the pancreas and salivary glands that helps your body break down carbohydrates into sugars.',
    purpose: 'This test is mainly used to diagnose and monitor pancreatitis (inflammation of the pancreas) or other pancreatic disorders, such as a pancreatic duct blockage or pancreatic cancer.',
    preparation: 'Fasting is usually not required, but you should avoid alcohol and certain medications (like opiates, diuretics, and oral contraceptives) for 24 hours before the test as they can affect results.',
    referenceRange: '30 to 110 U/L (units per liter) in blood. Normal ranges may vary slightly between laboratories.',
    clinicalSignificance: 'Significantly elevated levels (3 times normal or more) strongly suggest acute pancreatitis. Moderately elevated levels may indicate chronic pancreatitis, pancreatic duct blockage, or salivary gland inflammation.',
    faqs: [
      {
        q: 'Is a blood amylase test different from a urine amylase test?',
        a: 'Yes. Blood amylase levels rise quickly after pancreatic injury and return to normal in a few days. Urine amylase levels remain elevated longer, making urine tests helpful for diagnosing pancreatitis later in the course of illness.'
      }
    ]
  },
  'blood-glucose-test': {
    title: 'Blood Glucose Test',
    tagline: 'Crucial screening for diabetes diagnosis and blood sugar management',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=800&h=500',
    overview: 'A Blood Glucose Test measures the concentration of glucose (sugar) in your blood. Glucose is the main source of energy for your body\'s cells, regulated carefully by the hormone insulin.',
    purpose: 'Used to screen for, diagnose, and monitor prediabetes, Type 1 and Type 2 diabetes, and gestational diabetes.',
    preparation: 'For a Fasting Blood Sugar (FBS) test, you must fast (no food or drinks except plain water) for 8 to 12 hours prior to sample collection.',
    referenceRange: 'Fasting: 70–99 mg/dL (Normal), 100–125 mg/dL (Prediabetes), 126 mg/dL or higher on two separate tests (Diabetes).',
    clinicalSignificance: 'Persistent hyperglycemia (high blood sugar) is indicative of diabetes, which requires long-term management. Hypoglycemia (low blood sugar) can cause dizziness, sweating, or confusion, requiring immediate carbohydrate consumption.',
    faqs: [
      {
        q: 'How often should I get my blood glucose checked?',
        a: 'Adults over 45 should be screened every 3 years. If you have risk factors (obesity, high blood pressure, family history), screening should start earlier and occur more frequently.'
      }
    ]
  },
  'blood-urea-nitrogen': {
    title: 'Blood Urea Nitrogen (BUN) Test',
    tagline: 'Standard biomarker evaluating renal filtration capability',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800&h=500',
    overview: 'The Blood Urea Nitrogen (BUN) test measures the amount of nitrogen in your blood that comes from urea. Urea is a waste product created in the liver when protein is metabolized, filtered out of the blood by the kidneys.',
    purpose: 'Assesses kidney function, monitors the progression of kidney disease, and evaluates the effectiveness of treatments like dialysis.',
    preparation: 'Generally, no special preparation is needed, though eating a high-protein diet right before the test can temporarily elevate levels.',
    referenceRange: '7 to 20 mg/dL (2.5 to 7.1 mmol/L) for adults. Normal levels vary by age and gender.',
    clinicalSignificance: 'Elevated BUN levels (azotemia) can indicate kidney injury/failure, dehydration, high protein intake, congestive heart failure, or gastrointestinal bleeding. Low levels may suggest liver disease, malnutrition, or overhydration.',
    faqs: [
      {
        q: 'What is the difference between BUN and Creatinine tests?',
        a: 'Both evaluate kidney function, but Creatinine is a more stable product of muscle breakdown and is less affected by diet or hydration. Doctors often look at the BUN-to-Creatinine ratio to pinpoint the cause of kidney issues.'
      }
    ]
  },
  'blood-chemistry-panel': {
    title: 'Blood Chemistry Panel (CMP)',
    tagline: 'Comprehensive metabolic evaluation of key organs and electrolytes',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800&h=500',
    overview: 'A Comprehensive Metabolic Panel (CMP) is a blood test that measures 14 different substances. It provides a detailed overview of your body\'s chemical balance, metabolism, and major organ functions (kidneys, liver, and blood glucose).',
    purpose: 'Routine screening to monitor health, diagnose chronic conditions like diabetes, kidney disease, or liver damage, and keep track of side effects from medications.',
    preparation: 'You will need to fast (no food or drink except water) for 10 to 12 hours before having your blood drawn.',
    referenceRange: 'Consists of multiple individual tests. Examples: Glucose: 70-99 mg/dL, Calcium: 8.5-10.2 mg/dL, Total Protein: 6.0-8.3 g/dL, Creatinine: 0.6-1.2 mg/dL.',
    clinicalSignificance: 'Abnormalities across electrolytes, proteins, and enzymes help identify complex illnesses, including metabolic acidosis, renal insufficiency, hepatic inflammation, or mineral deficiencies.',
    faqs: [
      {
        q: 'What tests are included in a CMP?',
        a: 'It includes tests for: glucose, calcium, proteins (albumin and total protein), electrolytes (sodium, potassium, bicarbonate, chloride), kidney function (BUN, creatinine), and liver function (ALP, ALT, AST, bilirubin).'
      }
    ]
  },
  'chest-x-ray': {
    title: 'Chest X-Ray',
    tagline: 'Rapid cardiopulmonary imaging for diagnostics and screening',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800&h=500',
    overview: 'A Chest X-Ray is a non-invasive imaging test that uses a very low dose of electromagnetic radiation to produce images of your chest organs, including your lungs, heart, ribs, and major blood vessels.',
    purpose: 'Used to diagnose shortness of breath, persistent cough, chest pain, fever, or trauma. It can detect pneumonia, heart failure, emphysema, lung cancer, and rib fractures.',
    preparation: 'No fasting is required. You will be asked to remove jewelry, metal items, eyeglasses, and wear a patient gown to prevent artifacts on the X-ray film.',
    referenceRange: 'Lungs are clear and fully inflated; heart size is within normal limits; mediastinal structures are centered; ribs and spine show no acute fractures.',
    clinicalSignificance: 'White patches on the lung fields suggest infection (pneumonia) or fluid (pulmonary edema). An enlarged cardiac silhouette indicates cardiomegaly or heart failure. Air in the pleural space suggests a collapsed lung (pneumothorax).',
    faqs: [
      {
        q: 'Are chest X-rays safe during pregnancy?',
        a: 'While the radiation dose is extremely low, pregnant women should inform the technician. A lead shield will be placed over the abdomen to protect the developing baby from scattered rays.'
      }
    ]
  },
  'coagulation-profile': {
    title: 'Coagulation Profile (PT/INR)',
    tagline: 'Standardized assessment of blood clotting rates and efficacy',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800&h=500',
    overview: 'A Coagulation Profile (typically featuring Prothrombin Time and International Normalized Ratio) evaluates your blood\'s clotting ability. It measures the path and speed of clotting factors.',
    purpose: 'Used to monitor patients taking anticoagulant therapies (like warfarin), assess bleeding risks before surgeries, and diagnose bleeding or clotting disorders.',
    preparation: 'No specific fasting is required, but you must notify the laboratory of any blood thinners, supplements, or prescription medications you are taking.',
    referenceRange: 'Normal PT: 11 to 13.5 seconds. Healthy INR: 0.8 to 1.1. Therapeutic INR range for patients on anticoagulants: 2.0 to 3.0.',
    clinicalSignificance: 'An elevated INR indicates that your blood clots slower than normal, increasing risk of bleeding. A low INR suggests a higher risk of forming blood clots, which could lead to thrombosis or stroke.',
    faqs: [
      {
        q: 'Why does my INR need regular checking while on blood thinners?',
        a: 'Anticoagulant dosages must be precisely calibrated. Small changes in diet (e.g., Vitamin K intake), illness, or medications can alter coagulation levels, risking either excessive bleeding or blood clots.'
      }
    ]
  },
  'complete-blood-count': {
    title: 'Complete Blood Count (CBC)',
    tagline: 'General hematological health screening of vital blood cells',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800&h=500',
    overview: 'A Complete Blood Count (CBC) is a standard blood test that measures the cells making up your blood: red blood cells (RBCs), white blood cells (WBCs), platelets, hemoglobin, and hematocrit.',
    purpose: 'Used as a routine health screen, to evaluate symptoms like fatigue, weakness, bruising, or fever, and to diagnose conditions like anemia, infection, inflammation, or leukemia.',
    preparation: 'Fasting is generally not necessary for a CBC unless the same sample will be used for other tests that require fasting.',
    referenceRange: 'Hemoglobin: 12.0–17.5 g/dL, WBC: 4,500–11,000 cells/mcL, Platelets: 150,000–450,000/mcL, Red Blood Cells: 4.0–5.9 million/mcL.',
    clinicalSignificance: 'Low hemoglobin indicates anemia (reduced oxygen-carrying capacity). High WBC count points to active infection, inflammation, or leukemia. Low platelet count (thrombocytopenia) carries risks of bruising and bleeding.',
    faqs: [
      {
        q: 'What is a CBC with differential?',
        a: 'A differential CBC measures the specific types of white blood cells (neutrophils, lymphocytes, monocytes, eosinophils, basophils). This details the exact type of immune response, helping differentiate bacterial, viral, or allergic conditions.'
      }
    ]
  },
  'electrocardiogram': {
    title: 'Electrocardiogram (ECG / EKG)',
    tagline: 'Non-invasive mapping of the heart’s electrical pathway',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=800&h=500',
    overview: 'An Electrocardiogram (ECG) is a fast, simple, and painless test that records the electrical activity of your heart. Sticky patches (electrodes) are attached to your chest, arms, and legs to detect the heart\'s rhythm.',
    purpose: 'Used to diagnose irregular heart rhythms (arrhythmias), chest pain, detect past or silent heart attacks, and monitor heart treatments or pacemaker functions.',
    preparation: 'Avoid applying oily body creams or lotions to your chest, as they can prevent the electrodes from making proper contact with your skin.',
    referenceRange: 'Normal sinus rhythm with a heart rate of 60 to 100 beats per minute, and standard timing intervals for electrical impulses.',
    clinicalSignificance: 'ECG anomalies can show myocardial ischemia or infarction (active heart attack), ventricular hypertrophy, conduction blocks, or atrial fibrillation. Immediate medical consultation is required for acute abnormalities.',
    faqs: [
      {
        q: 'Does an ECG hurt, or does it send electricity into the body?',
        a: 'No. An ECG is completely painless. It does not send any electricity into your body; it only records the tiny electrical signals naturally generated by your beating heart.'
      }
    ]
  },
  'hba1c-test': {
    title: 'HbA1c Test (Glycated Hemoglobin)',
    tagline: 'Standard test assessing long-term blood sugar levels',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=500',
    overview: 'The HbA1c test measures the percentage of your hemoglobin (proteins in red blood cells that carry oxygen) that is coated with sugar. It reflects your average blood glucose levels over the past 2 to 3 months.',
    purpose: 'Diagnosing prediabetes and diabetes, and monitoring ongoing blood sugar control in diabetic patients.',
    preparation: 'No fasting is required. You can have the test at any time of day, regardless of when you last ate.',
    referenceRange: 'Below 5.7% (Normal), 5.7% to 6.4% (Prediabetes), 6.5% or higher on two separate occasions (Diabetes).',
    clinicalSignificance: 'For diabetic patients, keeping the HbA1c below 7.0% is a common target to reduce long-term complications like kidney damage, cardiovascular diseases, neuropathy, and vision loss.',
    faqs: [
      {
        q: 'Why is HbA1c better than a daily finger-prick glucose test?',
        a: 'A finger-prick test shows your blood sugar at that exact second, which fluctuates with meals, exercise, and stress. The HbA1c test represents an average over 90 days, giving a reliable picture of overall glycemic control.'
      }
    ]
  },
  'kidney-function-test': {
    title: 'Kidney Function Test (KFT)',
    tagline: 'Diagnostic panel assessing renal health and waste clearance',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800&h=500',
    overview: 'A Kidney Function Test (KFT) is a panel of blood and urine assays evaluating renal health. It primarily measures Creatinine, Blood Urea Nitrogen (BUN), and calculates the Estimated Glomerular Filtration Rate (eGFR).',
    purpose: 'Used to screen for kidney diseases, evaluate renal function in diabetic or hypertensive patients, and monitor kidney injury or chronic renal failure.',
    preparation: 'No fasting is strictly required, but you should avoid consuming large quantities of cooked meat or creatine supplements the day before testing.',
    referenceRange: 'Creatinine: 0.6–1.2 mg/dL, Blood Urea Nitrogen: 7–20 mg/dL, eGFR: >90 mL/min/1.73m² (levels below 60 suggest chronic kidney disease).',
    clinicalSignificance: 'Decreasing GFR accompanied by rising creatinine and urea indicates impaired filtration capacity, requiring clinical investigation for acute kidney injury or progressive chronic kidney disease.',
    faqs: [
      {
        q: 'What causes kidney dysfunction?',
        a: 'The two most common causes of kidney disease are diabetes and high blood pressure, both of which cause cumulative damage to the delicate filtration blood vessels in the kidneys over time.'
      }
    ]
  },
  'lipid-profile': {
    title: 'Lipid Profile Test',
    tagline: 'Crucial screening for cholesterol and cardiovascular disease risks',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=800&h=500',
    overview: 'A Lipid Profile is a panel of blood tests that measures the amount of cholesterol and other fats (lipids) in your blood. It evaluates Total Cholesterol, LDL (bad) cholesterol, HDL (good) cholesterol, and Triglycerides.',
    purpose: 'Used to assess your risk of developing cardiovascular disease, coronary artery disease, heart attacks, or strokes.',
    preparation: 'Fasting (avoiding food and drink except water) for 9 to 12 hours before the blood test is highly recommended for accurate results.',
    referenceRange: 'Total Cholesterol: <200 mg/dL, LDL Cholesterol: <100 mg/dL, HDL Cholesterol: >40 mg/dL (Men) or >50 mg/dL (Women), Triglycerides: <150 mg/dL.',
    clinicalSignificance: 'High LDL cholesterol and triglycerides contribute to plaque buildup in arteries (atherosclerosis), narrowing blood flow and raising heart disease risks. High HDL is protective and associated with lower cardiac risk.',
    faqs: [
      {
        q: 'Can high cholesterol be managed without medication?',
        a: 'Yes, mild cases are managed with lifestyle changes: eating a heart-healthy diet, regular physical exercise, weight management, and quitting smoking. If targets aren\'t met, doctors may prescribe statins.'
      }
    ]
  },
  'liver-function-test': {
    title: 'Liver Function Test (LFT)',
    tagline: 'Standard panel evaluating liver enzyme levels and protein synthesis',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800&h=500',
    overview: 'A Liver Function Test (LFT) is a panel of blood tests measuring hepatic enzymes, proteins, and bilirubin. Key markers include ALT, AST, ALP, Total Bilirubin, Albumin, and Total Protein.',
    purpose: 'To detect liver inflammation, damage (e.g., from hepatitis, alcohol, or medications), and monitor the progression of liver diseases like cirrhosis.',
    preparation: 'Fasting for 8 hours prior to blood collection is often recommended to ensure accurate enzyme and bilirubin values.',
    referenceRange: 'ALT: 7–56 U/L, AST: 10–40 U/L, ALP: 44–147 U/L, Total Bilirubin: 0.2–1.2 mg/dL, Albumin: 3.5–5.0 g/dL.',
    clinicalSignificance: 'Elevated ALT and AST indicate acute hepatocyte (liver cell) damage. High ALP and bilirubin point toward biliary tract obstruction or gallbladder issues. Low albumin reflects chronic liver dysfunction, since the liver produces this protein.',
    faqs: [
      {
        q: 'What are common signs of liver disease?',
        a: 'Symptoms include jaundice (yellowing of skin/eyes), abdominal swelling (ascites), dark urine, pale stools, chronic fatigue, and unexplained nausea.'
      }
    ]
  },
  'thyroid-function-test': {
    title: 'Thyroid Function Test (TFT)',
    tagline: 'Accurate hormonal evaluation checking thyroid endocrine activity',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800&h=500',
    overview: 'A Thyroid Function Test (TFT) is a series of blood tests used to measure thyroid hormones. It evaluates levels of Thyroid-Stimulating Hormone (TSH), Free T4 (thyroxine), and sometimes Free T3.',
    purpose: 'Diagnoses hyperthyroidism (overactive thyroid) or hypothyroidism (underactive thyroid), and monitors the dose of thyroid hormone replacement therapies.',
    preparation: 'No fasting is needed, but you should discuss the timing of taking thyroid medications with your physician before the test.',
    referenceRange: 'TSH: 0.4 to 4.0 mIU/L, Free T4: 0.8 to 1.8 ng/dL. Normal ranges can vary by age, pregnancy, and laboratory standards.',
    clinicalSignificance: 'High TSH with low Free T4 indicates hypothyroidism, leading to sluggishness, weight gain, and cold sensitivity. Low TSH with high Free T4 shows hyperthyroidism, causing anxiety, weight loss, and rapid heartbeat.',
    faqs: [
      {
        q: 'How does pregnancy affect thyroid test results?',
        a: 'Pregnancy hormones naturally increase thyroid hormone levels, meaning normal reference ranges change during pregnancy, requiring specialized obstetric thyroid monitoring.'
      }
    ]
  },
  'ultrasound-imaging': {
    title: 'Ultrasound Imaging',
    tagline: 'Safe, non-invasive imaging utilizing high-frequency sound waves',
    image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&q=80&w=800&h=500',
    overview: 'Ultrasound Imaging (Sonography) uses high-frequency sound waves to produce real-time diagnostic pictures of the body\'s internal organs, vessels, and tissues without exposing you to ionizing radiation.',
    purpose: 'Examines internal organs in the abdomen (liver, gallbladder, spleen, pancreas, kidneys) and pelvis. It is widely used to monitor pregnancy, diagnose gallstones or kidney stones, and guide biopsies.',
    preparation: 'Preparation varies: For abdominal scans, you must fast for 6 to 8 hours. For pelvic or obstetric scans, you must drink 4-6 glasses of water and hold your bladder to keep it full during the test.',
    referenceRange: 'Visualized internal organs are normal in size, shape, position, and echo texture. No gallstones, kidney stones, masses, or fluid accumulations are identified.',
    clinicalSignificance: 'Detects cysts, solid tumors, fluid collections, inflammation, organ enlargement, gallstones, or deep vein thrombosis (blood clots in legs). It evaluates fetal growth, heart rate, and anatomical structures.',
    faqs: [
      {
        q: 'Is ultrasound imaging safe?',
        a: 'Yes, ultrasound is completely safe. It uses sound waves, not radiation, which is why it is the imaging method of choice for monitoring pregnant women and developing babies.'
      }
    ]
  },
  'urine-analysis': {
    title: 'Urine Analysis',
    tagline: 'Standard urinalysis testing for infection and kidney indicators',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800&h=500',
    overview: 'A Urine Analysis (Urinalysis) is a physical, chemical, and microscopic analysis of a urine sample. It evaluates color, clarity, pH, and looks for blood, protein, glucose, ketones, and microscopic bacteria or blood cells.',
    purpose: 'Routine health screening, diagnosing a Urinary Tract Infection (UTI), checking kidney health, or monitoring conditions like diabetes or kidney stones.',
    preparation: 'Ensure proper cleanliness. Collect a midstream "clean-catch" sample in a sterile cup provided by the clinic to prevent contamination.',
    referenceRange: 'Color: Pale yellow to amber, Clarity: Clear, pH: 5.0–8.0, Proteins, Glucose, Ketones, Bilirubin, Blood, Nitrites: Negative.',
    clinicalSignificance: 'The presence of nitrites or leukocyte esterase indicates a UTI. Protein in the urine (proteinuria) is an early marker of kidney damage. Glucose in urine points toward undiagnosed or uncontrolled diabetes.',
    faqs: [
      {
        q: 'Why is a midstream catch important for urinalysis?',
        a: 'A midstream catch avoids collecting cells or bacteria from the outer skin/urethra at the beginning of urination, ensuring the sample reflects the bladder environment.'
      }
    ]
  },
  'vitamin-test': {
    title: 'Vitamin D & B12 Test',
    tagline: 'Standard screening checking essential micronutrient health',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=500',
    overview: 'A Vitamin D & B12 Test is a combination blood assay measuring the concentrations of 25-hydroxyvitamin D and Vitamin B12, two essential micronutrients key for cellular energy, nerve health, and bone structures.',
    purpose: 'Diagnoses bone loss, osteoporosis, chronic fatigue, neuropathy, peripheral tingling, or types of anemia associated with vitamin deficiencies.',
    preparation: 'Fasting is not required for Vitamin D but is recommended for 6-8 hours for Vitamin B12 testing to ensure baseline accuracy.',
    referenceRange: 'Vitamin D (25-OH): 30–100 ng/mL (optimal). Vitamin B12: 200–900 pg/mL.',
    clinicalSignificance: 'Severe Vitamin D deficiency (<20 ng/mL) causes bone pain, weak immunity, and osteopenia. Deficient B12 (<200 pg/mL) causes megaloblastic anemia, cognitive fatigue, and irreversible nerve damage if left untreated.',
    faqs: [
      {
        q: 'What foods are rich in Vitamin B12?',
        a: 'B12 is found primarily in animal-derived foods like meat, fish, poultry, eggs, and dairy. Vegetarians and vegans are at risk of deficiency and may need to take daily B12 supplements.'
      }
    ]
  }
};

// Add slugs aliases to support plural names from the diagnostics catalog
const slugAliases: Record<string, string> = {
  'thyroid-function-tests': 'thyroid-function-test',
  'liver-function-tests': 'liver-function-test',
  'kidney-function-tests': 'kidney-function-test',
  'blood-glucose-testing': 'blood-glucose-test',
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function TestDetail({ params }: PageProps) {
  const resolvedParams = React.use(params);
  const rawSlug = resolvedParams.slug;
  const slug = slugAliases[rawSlug] || rawSlug;
  
  // Find test or fallback to Complete Blood Count (CBC)
  const test = testsData[slug] || testsData['complete-blood-count'];

  // Booking Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert('Please fill in Name, Phone Number, and Date.');
      return;
    }
    setIsBooked(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col">
      <Header />

      {/* Main Container */}
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1500px] mx-auto">

          {/* Back Button */}
          <Link
            href="/diagnostics"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#d81b47] font-semibold text-sm sm:text-base mb-8 transition-colors select-none group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Back to Diagnostics
          </Link>

          {/* Department Header Banner */}
          <div className="relative rounded-2xl overflow-hidden shadow-md mb-12 h-64 sm:h-80 md:h-[400px]">
            <img
              src={test.image}
              alt={test.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e2f41]/90 via-[#1e2f41]/70 to-transparent" />

            {/* Banner Text overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-16 max-w-3xl text-white">
              <span className="bg-primary text-white px-3.5 py-1 text-xs font-bold rounded-full w-fit uppercase tracking-widest mb-3">
                Lab Test
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                {test.title}
              </h1>
              <p className="text-pink-300 font-semibold text-base sm:text-lg md:text-xl mt-3 tracking-wide">
                {test.tagline}
              </p>
            </div>
          </div>

          {/* Split Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left Column - Detailed Copy */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-sm space-y-10">

              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e2f41] mb-4 flex items-center gap-2.5">
                  <Info className="text-[#d81b47]" size={24} />
                  Test Overview
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {test.overview}
                </p>
              </div>

              {/* Purpose */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e2f41] mb-4 flex items-center gap-2.5">
                  <Activity className="text-[#d81b47]" size={24} />
                  Purpose of the Test
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {test.purpose}
                </p>
              </div>

              {/* Prep & Reference Ranges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Preparation Instructions */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#1e2f41] mb-3 flex items-center gap-2">
                      <Clock className="text-[#d81b47]" size={18} />
                      Preparation Guidelines
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {test.preparation}
                    </p>
                  </div>
                </div>

                {/* Normal Ranges */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#1e2f41] mb-3 flex items-center gap-2">
                      <FileText className="text-[#d81b47]" size={18} />
                      Reference Ranges
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {test.referenceRange}
                    </p>
                  </div>
                </div>

              </div>

              {/* Clinical Significance */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e2f41] mb-4 flex items-center gap-2.5">
                  <Layers className="text-[#d81b47]" size={24} />
                  Clinical Interpretation
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {test.clinicalSignificance}
                </p>
              </div>

              {/* FAQs */}
              {test.faqs.length > 0 && (
                <div className="pt-6 border-t border-slate-100">
                  <h2 className="text-2xl font-bold text-[#1e2f41] mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {test.faqs.map((faq, idx) => (
                      <div key={idx} className="space-y-2">
                        <h4 className="font-bold text-[#1e2f41] text-base sm:text-lg">Q. {faq.q}</h4>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base pl-5 border-l-2 border-slate-200">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm lg:sticky lg:top-28">

              {!isBooked ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                    <Calendar className="text-[#d81b47]" size={22} />
                    <h3 className="text-xl font-bold text-[#1e2f41]">Schedule Test</h3>
                  </div>

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Patient Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#d81b47] focus:ring-1 focus:ring-[#d81b47] transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Contact Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#d81b47] focus:ring-1 focus:ring-[#d81b47] transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  {/* Date & Time Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date *</label>
                      <input
                        type="date"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#d81b47] transition-all"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pref. Time</label>
                      <input
                        type="time"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#d81b47] transition-all"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Special Requests</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Home sample collection, severe allergies..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#d81b47] focus:ring-1 focus:ring-[#d81b47] transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#d81b47] hover:bg-[#b01338] text-white font-bold text-sm tracking-wide rounded-lg shadow-sm hover:shadow transition-all duration-300 select-none cursor-pointer"
                  >
                    Confirm Booking
                  </button>
                </form>
              ) : (
                <div className="py-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-6 border border-emerald-100 shadow-inner">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e2f41] mb-2">Slot Scheduled!</h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-8">
                    Thank you, <span className="font-semibold text-slate-700">{formData.name}</span>. An appointment for your <span className="font-semibold text-slate-700">{test.title}</span> has been requested. Our clinic will call you on <span className="font-semibold text-slate-700">{formData.phone}</span> to finalize the schedule.
                  </p>
                  <button
                    onClick={() => {
                      setIsBooked(false);
                      setFormData({ name: '', phone: '', date: '', time: '', message: '' });
                    }}
                    className="py-2.5 px-6 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Book Another Test
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
