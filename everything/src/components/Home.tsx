import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Brain, Database, Rocket, CheckCircle2 } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 md:py-20">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary">
            <Database size={14} className="fill-current" />
            <span className="text-xs font-bold tracking-wider uppercase">Advanced HR Intelligence</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-on-surface font-headline">
            Predictive Modeling of Employee Turnover
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Leveraging Supervised Machine Learning to transform workforce data into actionable retention strategies. Anticipate attrition before it happens.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <button 
              onClick={() => onNavigate('predict')}
              className="px-8 py-4 bg-primary text-on-primary font-bold rounded-xl hover:bg-opacity-90 transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              Try Prediction <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="px-8 py-4 bg-surface-container-high text-on-surface font-bold rounded-xl hover:bg-surface-container-highest transition-all active:scale-95"
            >
              View Research
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-2xl shadow-on-surface/5 border border-outline-variant/10">
            <div className="flex justify-between items-center mb-6">
              <span className="font-headline font-bold text-lg">Live Model Accuracy</span>
              <span className="px-3 py-1 bg-tertiary-container text-tertiary font-bold rounded-full text-xs">94.2% AUC</span>
            </div>
            <div className="space-y-6">
              <div className="h-40 bg-surface-container-low rounded-xl overflow-hidden flex items-end px-4 gap-2">
                <div className="bg-primary/20 w-full h-1/2 rounded-t-md"></div>
                <div className="bg-primary/40 w-full h-3/4 rounded-t-md"></div>
                <div className="bg-primary/60 w-full h-2/3 rounded-t-md"></div>
                <div className="bg-primary w-full h-full rounded-t-md"></div>
                <div className="bg-primary/80 w-full h-5/6 rounded-t-md"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface-container-low rounded-xl">
                  <span className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Precision</span>
                  <div className="text-2xl font-extrabold font-headline text-on-surface">0.89</div>
                </div>
                <div className="p-4 bg-surface-container-low rounded-xl">
                  <span className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Recall</span>
                  <div className="text-2xl font-extrabold font-headline text-on-surface">0.91</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Concept Section */}
      <section className="mb-24">
        <div className="mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">The Mechanics</span>
          <h2 className="text-4xl font-extrabold mt-2 font-headline tracking-tight">What is Turnover Prediction?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-2xl border border-outline-variant/10 flex flex-col justify-between min-h-[320px]">
            <div>
              <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center mb-6 text-primary">
                <Brain size={24} />
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4">Supervised Learning Core</h3>
              <p className="text-on-surface-variant leading-relaxed max-w-xl">
                Our model uses historical data—where the outcome (stayed or left) is known—to learn complex patterns between employee engagement, compensation, tenure, and satisfaction. It essentially "studies" past departures to recognize signs of future ones.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Random Forest', 'XGBoost', 'Logistic Regression'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-medium text-on-surface-variant">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-primary p-10 rounded-2xl text-on-primary flex flex-col justify-center shadow-xl shadow-primary/20">
            <Database size={48} className="mb-6 opacity-80" />
            <h3 className="text-2xl font-bold font-headline mb-4">IBM HR Analytics</h3>
            <p className="opacity-90 leading-relaxed">
              Trained on the comprehensive IBM Employee Attrition dataset, analyzing 35+ variables from JobInvolvement to WorkLifeBalance.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-10 rounded-2xl border border-outline-variant/10">
            <div className="w-12 h-12 bg-tertiary-container rounded-xl flex items-center justify-center mb-6 text-tertiary">
              <Rocket size={24} />
            </div>
            <h3 className="text-xl font-bold font-headline mb-3">Proactive Retention</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Instead of conducting exit interviews, companies can now intervene months in advance with targeted incentives and support systems.
            </p>
          </div>
          <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-2xl border border-outline-variant/10 flex items-center gap-8 overflow-hidden">
            <div className="flex-1">
              <h3 className="text-xl font-bold font-headline mb-3">Impact Analysis</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Reducing turnover by just 5% can save large enterprises millions in recruitment and onboarding costs while preserving institutional knowledge.
              </p>
            </div>
            <div className="hidden sm:block w-64 h-40 bg-surface-container-low rounded-xl relative overflow-hidden">
              <img 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEdr2m9SvU4aYOHtfM-UGnuJEFhOVgpjksdcsa0osNunfm8IeFpo3SX5-I2ze65dEgQg5LPuh5bsxMeaYxRTSNCgF2HSw0ms-4FiSWxW4flcfAB0o3hlF0qOr4xW4iWLu0e9YIgIwXdZ8XEMYRgh6zHk5Rlylnbw-Wbb5zSzsjutOrplj4HqiMHtHTdGtiAlNrEYADzWEAJhBH7JjtYUAN1h2bn93kD36uAhtnpvaDSd4KCAnnqRwGLKb0STN8zp7liMtxi3CT0CM"
                alt="Dashboard"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="order-2 lg:order-1">
          <div className="bg-white rounded-2xl shadow-2xl shadow-on-surface/10 overflow-hidden border border-outline-variant/10">
            <div className="bg-surface-container-high px-6 py-4 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-tertiary"></div>
              </div>
              <span className="text-xs font-bold text-on-surface-variant">TURN_PREDICT_v2.0</span>
            </div>
            <div className="p-10 space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-bold text-on-surface">Predicting Risk: Employee #842</span>
                  <span className="text-error font-bold">84% Risk Level</span>
                </div>
                <div className="w-full h-2 bg-surface-container-low rounded-full">
                  <div className="w-[84%] h-full bg-error rounded-full"></div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Risk Factor Attribution</h4>
                <div className="space-y-4">
                  {[
                    { label: 'Overtime', value: '+42%' },
                    { label: 'Last Promotion', value: '+18%' },
                    { label: 'Market Comp', value: '+12%' },
                  ].map(factor => (
                    <div key={factor.label} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-on-surface">
                        <span className="w-2 h-2 rounded-full bg-primary"></span> {factor.label}
                      </span>
                      <span className="font-mono font-bold text-on-surface">{factor.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => onNavigate('results')}
                className="w-full py-4 bg-surface-container-high rounded-xl text-primary font-bold hover:bg-primary hover:text-on-primary transition-all active:scale-95"
              >
                Generate Intervention Roadmap
              </button>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface">Granular Insights for Strategic Decisions</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Our modeling doesn't just give you a "yes" or "no". It provides a <strong className="text-on-surface">probabilistic risk score</strong> and identifies the specific drivers behind each employee's potential departure.
          </p>
          <ul className="space-y-6">
            {[
              { title: 'SHAP Value Integration', desc: 'Explainable AI that shows exactly which features influenced the prediction.' },
              { title: 'Real-time Scenario Planning', desc: 'Simulate the impact of salary increases or remote work options on retention probability.' },
            ].map(item => (
              <li key={item.title} className="flex gap-4 items-start">
                <div className="bg-tertiary-container p-1 rounded-full text-tertiary">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <span className="font-bold block text-on-surface">{item.title}</span>
                  <span className="text-sm text-on-surface-variant">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold font-headline mb-6 text-on-surface">Ready to optimize your workforce?</h2>
        <p className="text-on-surface-variant text-lg mb-10">
          Join forward-thinking HR departments using data science to build more resilient, engaged, and stable teams.
        </p>
        <button 
          onClick={() => onNavigate('predict')}
          className="px-10 py-5 bg-primary text-on-primary font-bold rounded-xl hover:bg-opacity-90 transition-all active:scale-95 shadow-2xl shadow-primary/30"
        >
          Get Started with Predictive Insights
        </button>
      </section>
    </div>
  );
}
