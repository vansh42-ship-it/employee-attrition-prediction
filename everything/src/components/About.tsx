import React from 'react';
import { motion } from 'motion/react';
import { Download, Terminal, Layers, Database, Code, Cpu, Globe, BookOpen, TrendingUp, DollarSign } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 md:py-20">
      <header className="mb-20">
        <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Technical Overview</p>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight leading-tight max-w-4xl font-headline">
          Architecting Predictive Intelligence for Human Resources
        </h1>
        <p className="mt-8 text-xl text-on-surface-variant leading-relaxed max-w-3xl">
          A deep dive into the algorithmic backbone, data structures, and technological stack powering our predictive modeling engine.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-7 bg-surface-container-lowest p-10 rounded-2xl relative overflow-hidden flex flex-col justify-between border border-outline-variant/10 shadow-sm"
        >
          <div>
            <div className="w-14 h-14 bg-primary-container text-primary flex items-center justify-center rounded-2xl mb-8">
              <Cpu size={28} />
            </div>
            <h2 className="text-3xl font-bold text-on-surface mb-6 font-headline">Supervised Learning: Random Forest Regressor</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Our model utilizes an ensemble learning method that constructs a multitude of decision trees during training. By aggregating the results of 500 individual estimators, we mitigate overfitting and ensure robust variance handling across complex HR datasets.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-surface-container-high rounded-full text-xs font-bold text-on-surface-variant tracking-wider">ENSEMBLE METHOD</span>
              <span className="px-4 py-2 bg-surface-container-high rounded-full text-xs font-bold text-on-surface-variant tracking-wider">BOOTSTRAP AGGREGATING</span>
            </div>
          </div>
          <div className="mt-12 bg-surface-container-low p-8 rounded-2xl">
            <div className="flex justify-between items-end">
              <div>
                <span className="block text-4xl font-extrabold text-primary font-headline">94.2%</span>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Model Accuracy</span>
              </div>
              <div className="text-right">
                <span className="block text-2xl font-bold text-tertiary">0.082</span>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">RMSE Error</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-5 bg-surface-container-low rounded-2xl flex flex-col overflow-hidden border border-outline-variant/10"
        >
          <div className="p-10">
            <h3 className="text-2xl font-bold text-on-surface mb-3 font-headline">Visualizing Logic</h3>
            <p className="text-on-surface-variant leading-relaxed">Recursive partitioning of feature space into high-dimensional hypercubes.</p>
          </div>
          <div className="flex-grow flex items-center justify-center p-10 pt-0">
            <img 
              alt="Algorithm Visualization" 
              className="rounded-2xl shadow-2xl w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlRrkrI3zK6tyHhquqtfH48LB80hQLoDDhDyKgEvuhKQ9L_VNNzfKQYgw-fwpZJm0k_FJe3J6w-Mpn4lUA9vPGZm_Tpc7ojvl-9DxtklGCTjnyaFvfJpW0OyNOVEXED5UUjKmU0BW7YossDEUlfAGOoE576fL_FlD_MdaN_F97EwesYiEU3wfYnJsG361ZebKtFabQcEUtyUkwvx94eDnz5jXTAHwaa48VUgOaD7Nh8nrM6S4F1FSxMsLO_GIwYSY7Ex7o2fARS1k"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </section>

      <section className="mb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-on-surface mb-6 font-headline">IBM HR Analytics Dataset</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              Our model is trained on the industry-standard IBM HR Analytics Employee Attrition & Performance dataset, featuring 1,470 records with 35 behavioral and professional dimensions.
            </p>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg">
                <Code size={24} />
              </div>
              <div>
                <span className="block font-bold text-on-surface font-headline">Training Script Available</span>
                <span className="text-sm text-on-surface-variant">The Python code used for model training and evaluation is included in the project root as <code className="bg-surface-container-high px-2 py-0.5 rounded text-primary">train_model.py</code>.</span>
              </div>
            </div>
          </div>
          <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-primary/20">
            <Download size={20} />
            Dataset Schema
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <TrendingUp size={24} />, title: 'Attrition Drivers', desc: 'Identification of key factors like OverTime, JobLevel, and MonthlyIncome that statistically correlate with turnover.' },
            { icon: <Globe size={24} />, title: 'Environment Metrics', desc: 'Quantifying the impact of EnvironmentSatisfaction and RelationshipSatisfaction on long-term retention.' },
            { icon: <DollarSign size={24} />, title: 'Compensation Parity', desc: 'Analyzing PercentSalaryHike and StockOptionLevel as primary drivers for professional stability.' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-8 rounded-2xl border-b-4 border-transparent hover:border-primary transition-all border-x border-t border-outline-variant/10 shadow-sm">
              <div className="text-primary mb-6">{feature.icon}</div>
              <h4 className="font-bold text-xl mb-3 font-headline">{feature.title}</h4>
              <p className="text-on-surface-variant leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-low rounded-[2rem] p-12 md:p-20 overflow-hidden relative border border-outline-variant/10">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-on-surface mb-8 font-headline">Built for High-Fidelity Performance</h2>
            <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
              Our engineering philosophy prioritizes low-latency inference and high-integrity data visualization. The stack is curated to handle enterprise-grade analytical workloads with seamless reactivity.
            </p>
            <ul className="space-y-10">
              {[
                { icon: <Terminal size={24} />, title: 'Python & Scikit-Learn', desc: 'Core backend for model training, cross-validation, and pipeline orchestration.' },
                { icon: <Layers size={24} />, title: 'React & Tailwind CSS', desc: 'Modern frontend architecture for a performant, component-driven user experience.' },
                { icon: <Database size={24} />, title: 'PostgreSQL & FastAPI', desc: 'High-performance data persistence and asynchronous API delivery.' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-6">
                  <div className="mt-1 text-primary">{item.icon}</div>
                  <div>
                    <span className="font-bold block text-xl text-on-surface mb-1 font-headline">{item.title}</span>
                    <span className="text-on-surface-variant leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Modeling', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB39qnlyys0TgEgdgkxDBuTfmPBSZfblWPKd5ocaTRFLxnOr-rPyZCWqw2j_CI8UCMxtvJVwtAPpm7uH0BM-666HnoD5DJKvDD09BCTSIhE-jMnr5Y5Ect724L1mKI6tehrbSznRuoEy7elQXOF-x10M6eHDgAOCHPgo4W7YM2ieJhPDng52KsSE22TCwFukm3i8ztu_UOojeUriCjUI2TpWVysRjiEBC4k8rDy2WM9tiMuXFvKyV8MSFiIfnjIB-oAnm7Ar9-0wKk' },
              { label: 'Interface', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpWba5cblxP6aPHBgYN9lhCxaxfWwlYxFf6dljjFmckIMsKDRPLCljGyZYwzch8G0SSp4meY_Pt2sCaiEo6IlT6Ip-Yk1WkM41zroxVRiHzBp75V5dwFHN4fD9B2JDVrHVy8saFNRTqv2zaab_bQPpMlM-_50st5UST5F-IRnhdqSz7kwZveoEyjfOHODp30LFd2B-zg2MLIqTzg134mK9IX0txqxGSrcVM4hdeqk5IF7EC60dcL0Df3VWqniPCy34XD7Q5LIj5x4' },
              { label: 'Backend', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT9uqjF8Ul56Ovqw-br7cal-a8rEqpciaM4VnvhYS-XEGu8cWIkAdlbdomtmVwlN88OKC8Ixi8qs6ieTpTsAuQfpijmROETeHZXTHhvcEPXfzYDScbb-0rlThz1Dh0A9y7UIcz7NRlBnKAiy8yOPGPB689wd8SlJ0aEmD29kgCqMsRMlbEqGSfz6pFJvgoQYBFNm0Fs35aPCyKilo5ouVATWg-bmw5J2pSvna9cpiS-5dQFOZ2ZBRbIHw9FfKw5Gj7MOfWdiwoy3c' },
              { label: 'Learning', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe0ktRxiiGJjZOJ-5URo18o6N8mS8WxuY__zW9tt1jprReC3byrTDPDrrVGl04ZPjjTNT-7DWEHMw8hbtF18koOdQc_Kv1t6irB6WpyCTyY7eF_npjqOl6AzT-PrIQFmWT_x4QEuOxrSFaxhAqgFB04YR6psuGUsT-TLSbuPGkZNHDpCXDpaCUvLXZ4qLVHCZS8J4u2BrB-sJ0L-lyvqHsTgcL3uWJ8_Q5od9Oa04F9tfwjF1bjIl6EqslBSdkEODLrbv0juBhxB8' },
            ].map((tech, idx) => (
              <div key={idx} className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm border border-outline-variant/10">
                <img 
                  alt={tech.label} 
                  className="w-16 h-16 mb-6" 
                  src={tech.icon}
                  referrerPolicy="no-referrer"
                />
                <span className="font-bold text-xs uppercase tracking-[0.2em] text-on-surface-variant">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
