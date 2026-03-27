import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, TrendingUp, History, Frown, Lightbulb, Network, RefreshCw } from 'lucide-react';
import { PredictionResult } from '../types';

interface ResultsProps {
  result: PredictionResult;
  onReset: () => void;
}

export default function Results({ result, onReset }: ResultsProps) {
  const isHighRisk = result.status === 'Likely to Leave';
  const statusColor = isHighRisk ? 'text-error' : 'text-tertiary';
  const statusBg = isHighRisk ? 'bg-error-container text-on-error-container' : 'bg-tertiary-container text-on-tertiary-container';

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="mb-12">
        <span className="font-bold text-xs text-primary uppercase tracking-widest block mb-1">Analysis Outcome</span>
        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface">Retention Prediction Report</h1>
      </div>

      <div className="grid grid-cols-12 gap-8 mb-12">
        {/* Probability Score */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-12 lg:col-span-5 bg-surface-container-lowest rounded-2xl p-10 flex flex-col items-center justify-center relative overflow-hidden border border-outline-variant/10 shadow-sm"
        >
          <div className="absolute top-0 right-0 p-6">
            <AlertTriangle size={64} className={isHighRisk ? 'text-error/10' : 'text-tertiary/10'} />
          </div>
          <h3 className="font-headline text-lg font-bold text-on-surface-variant mb-10 self-start">Probability Score</h3>
          
          <div className="relative w-72 h-72 mb-8">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle 
                className="text-surface-container-highest" 
                cx="50" cy="50" r="42" 
                fill="transparent" 
                stroke="currentColor" 
                strokeWidth="8" 
              />
              <motion.circle 
                initial={{ strokeDashoffset: 264 }}
                animate={{ strokeDashoffset: 264 - (264 * result.confidence) / 100 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={statusColor} 
                cx="50" cy="50" r="42" 
                fill="transparent" 
                stroke="currentColor" 
                strokeWidth="8" 
                strokeDasharray="264" 
                strokeLinecap="round" 
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-headline text-6xl font-extrabold text-on-surface">{result.confidence}%</span>
              <span className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Confidence</span>
            </div>
          </div>

          <div className="text-center">
            <div className={`${statusBg} px-6 py-2 rounded-full font-headline font-bold text-2xl inline-block mb-4`}>
              {result.status}
            </div>
            <p className="text-on-surface-variant font-bold text-sm">
              Employee ID: {result.employeeId} • Department: {result.department}
            </p>
          </div>
        </motion.div>

        {/* Insights Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-12 lg:col-span-7"
        >
          <div className="bg-surface-container-low rounded-2xl p-10 h-full border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-10">
              <TrendingUp size={28} className="text-primary" />
              <h3 className="font-headline text-2xl font-bold text-on-surface">Insights Summary</h3>
            </div>
            <div className="space-y-10">
              {result.insights.map((insight, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-${insight.color}`}>
                    {insight.icon === 'trending-up' && <TrendingUp size={24} />}
                    {insight.icon === 'history' && <History size={24} />}
                    {insight.icon === 'sentiment' && <Frown size={24} />}
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface text-lg mb-1">{insight.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{insight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Secondary Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-surface-container-low rounded-2xl p-8 border-b-4 border-primary/20 border border-outline-variant/10"
        >
          <Lightbulb size={32} className="text-primary mb-6" />
          <h4 className="font-headline font-bold text-on-surface text-lg mb-3">Retention Strategy</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            Immediate 1-on-1 career mapping session is recommended to address growth concerns.
          </p>
          <button className="text-primary font-bold text-sm hover:underline flex items-center gap-2">
            View Roadmap →
          </button>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-surface-container-low rounded-2xl p-8 border-b-4 border-tertiary/20 border border-outline-variant/10"
        >
          <Network size={32} className="text-tertiary mb-6" />
          <h4 className="font-headline font-bold text-on-surface text-lg mb-3">Team Impact</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            Potential risk to 3 active projects in the {result.department} department if subject exits.
          </p>
          <button className="text-tertiary font-bold text-sm hover:underline flex items-center gap-2">
            Risk Analysis →
          </button>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-primary text-on-primary rounded-2xl p-8 flex flex-col justify-between items-start overflow-hidden relative group shadow-xl shadow-primary/20"
        >
          <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <TrendingUp size={160} />
          </div>
          <div>
            <h4 className="font-headline font-bold text-2xl mb-3">Ready for next?</h4>
            <p className="text-on-primary/80 text-sm leading-relaxed mb-8">
              Run a new simulation with adjusted parameters or different subjects.
            </p>
          </div>
          <button 
            onClick={onReset}
            className="bg-white text-primary px-8 py-4 rounded-xl font-headline font-bold text-sm flex items-center gap-2 transition-all active:scale-95"
          >
            <RefreshCw size={18} />
            Predict Another
          </button>
        </motion.div>
      </div>

      {/* Model Metadata */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white/40 backdrop-blur-md rounded-2xl p-10 border border-outline-variant/10"
      >
        <h3 className="font-headline text-xl font-bold text-on-surface mb-8">Model Metadata</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: 'Algorithm', value: 'Random Forest (IBM Tuned)' },
            { label: 'Dataset', value: 'IBM HR Analytics' },
            { label: 'Feature Count', value: '35 Dimensions' },
            { label: 'Accuracy Score', value: '89.4% AUC-ROC' },
          ].map(meta => (
            <div key={meta.label}>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">{meta.label}</p>
              <p className="font-headline font-bold text-on-surface text-lg">{meta.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
