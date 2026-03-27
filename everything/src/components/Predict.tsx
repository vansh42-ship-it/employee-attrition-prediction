import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, DollarSign, Briefcase, Clock, Heart, Sparkles, Info } from 'lucide-react';
import { Page, EmployeeData } from '../types';

interface PredictProps {
  onPredict: (data: EmployeeData) => void;
}

export default function Predict({ onPredict }: PredictProps) {
  const [formData, setFormData] = useState<EmployeeData>({
    age: 34,
    monthlyIncome: 5000,
    department: 'Sales',
    jobRole: 'Sales Executive',
    yearsAtCompany: 5,
    totalWorkingYears: 10,
    jobLevel: 2,
    distanceFromHome: 5,
    stockOptionLevel: 1,
    overtime: false,
    jobSatisfaction: 3,
    workLifeBalance: 3,
    jobInvolvement: 3,
    performanceRating: 3,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPredict(formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="mb-12">
        <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-2">Predictive Analysis</span>
        <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-4 font-headline">Employee Attrition Risk</h1>
        <p className="text-on-surface-variant max-w-2xl leading-relaxed">
          Fill in the employee parameters below to generate a real-time turnover probability score based on the IBM HR Analytics predictive model.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-8 bg-surface-container-lowest p-10 rounded-2xl border border-outline-variant/10 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Professional Profile */}
            <section>
              <h2 className="text-lg font-bold text-on-surface mb-8 flex items-center gap-3 font-headline">
                <User size={20} className="text-primary" />
                Professional Profile
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">Age</label>
                  <input 
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface font-medium"
                    placeholder="e.g. 34"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">Monthly Income</label>
                  <div className="relative">
                    <span className="absolute left-0 top-3 text-on-surface-variant font-medium">$</span>
                    <input 
                      type="number"
                      min="0"
                      value={formData.monthlyIncome || ''}
                      onChange={(e) => setFormData({ ...formData, monthlyIncome: parseInt(e.target.value) || 0 })}
                      className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all pl-4 pr-0 py-3 text-on-surface font-medium"
                      placeholder="5,000"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">Department</label>
                  <select 
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface font-medium appearance-none"
                  >
                    <option>Sales</option>
                    <option>Research & Development</option>
                    <option>Human Resources</option>
                    <option>Engineering</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">Job Role</label>
                  <select 
                    value={formData.jobRole}
                    onChange={(e) => setFormData({ ...formData, jobRole: e.target.value })}
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface font-medium appearance-none"
                  >
                    <option>Sales Executive</option>
                    <option>Research Scientist</option>
                    <option>Laboratory Technician</option>
                    <option>Manufacturing Director</option>
                    <option>Healthcare Representative</option>
                    <option>Manager</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">Job Level (1-5)</label>
                  <input 
                    type="number"
                    min="1"
                    max="5"
                    value={formData.jobLevel}
                    onChange={(e) => setFormData({ ...formData, jobLevel: parseInt(e.target.value) })}
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">Stock Option Level (0-3)</label>
                  <input 
                    type="number"
                    min="0"
                    max="3"
                    value={formData.stockOptionLevel}
                    onChange={(e) => setFormData({ ...formData, stockOptionLevel: parseInt(e.target.value) })}
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface font-medium"
                  />
                </div>
              </div>
            </section>

            {/* Tenure & Environment */}
            <section>
              <h2 className="text-lg font-bold text-on-surface mb-8 flex items-center gap-3 font-headline">
                <Clock size={20} className="text-primary" />
                Tenure & Environment
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">Years at Company</label>
                  <input 
                    type="number"
                    value={formData.yearsAtCompany}
                    onChange={(e) => setFormData({ ...formData, yearsAtCompany: parseInt(e.target.value) })}
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface font-medium"
                    placeholder="e.g. 5"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">Total Working Years</label>
                  <input 
                    type="number"
                    value={formData.totalWorkingYears}
                    onChange={(e) => setFormData({ ...formData, totalWorkingYears: parseInt(e.target.value) })}
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">Distance From Home (km)</label>
                  <input 
                    type="number"
                    value={formData.distanceFromHome}
                    onChange={(e) => setFormData({ ...formData, distanceFromHome: parseInt(e.target.value) })}
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface font-medium"
                  />
                </div>
                <div className="flex items-center justify-between bg-surface-container-low p-6 rounded-xl">
                  <div>
                    <span className="block text-sm font-bold text-on-surface-variant">Overtime</span>
                    <span className="text-xs text-outline">Regular extra-hour engagement</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, overtime: !formData.overtime })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                      formData.overtime ? 'bg-primary' : 'bg-outline-variant/30'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        formData.overtime ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </section>

            {/* Employee Sentiment & Performance */}
            <section>
              <h2 className="text-lg font-bold text-on-surface mb-8 flex items-center gap-3 font-headline">
                <Heart size={20} className="text-primary" />
                Sentiment & Performance
              </h2>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-surface-container-low p-6 rounded-xl">
                    <label className="block text-sm font-bold text-on-surface-variant mb-4">Job Satisfaction (1-4)</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => setFormData({ ...formData, jobSatisfaction: level })}
                          className={`flex-1 py-2 rounded-lg border transition-all font-bold ${
                            formData.jobSatisfaction === level
                              ? 'border-primary bg-primary text-on-primary'
                              : 'border-outline-variant/30 bg-white text-on-surface-variant'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded-xl">
                    <label className="block text-sm font-bold text-on-surface-variant mb-4">Work-Life Balance (1-4)</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => setFormData({ ...formData, workLifeBalance: level })}
                          className={`flex-1 py-2 rounded-lg border transition-all font-bold ${
                            formData.workLifeBalance === level
                              ? 'border-primary bg-primary text-on-primary'
                              : 'border-outline-variant/30 bg-white text-on-surface-variant'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded-xl">
                    <label className="block text-sm font-bold text-on-surface-variant mb-4">Job Involvement (1-4)</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => setFormData({ ...formData, jobInvolvement: level })}
                          className={`flex-1 py-2 rounded-lg border transition-all font-bold ${
                            formData.jobInvolvement === level
                              ? 'border-primary bg-primary text-on-primary'
                              : 'border-outline-variant/30 bg-white text-on-surface-variant'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded-xl">
                    <label className="block text-sm font-bold text-on-surface-variant mb-4">Performance Rating (1-4)</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => setFormData({ ...formData, performanceRating: level })}
                          className={`flex-1 py-2 rounded-lg border transition-all font-bold ${
                            formData.performanceRating === level
                              ? 'border-primary bg-primary text-on-primary'
                              : 'border-outline-variant/30 bg-white text-on-surface-variant'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <button 
              type="submit"
              className="w-full bg-primary text-on-primary font-bold py-6 rounded-xl text-xl flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:bg-opacity-90 transition-all active:scale-95"
            >
              Predict Turnover <Sparkles size={24} />
            </button>
          </form>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-4 space-y-8"
        >
          <div className="bg-surface-container-highest p-8 rounded-2xl border border-outline-variant/10">
            <h3 className="text-on-surface font-extrabold text-xl mb-6 font-headline">Model Accuracy</h3>
            <div className="flex items-end gap-2 mb-8">
              <span className="text-5xl font-extrabold text-primary tracking-tighter">94.2%</span>
              <span className="text-sm text-on-surface-variant font-bold mb-1">CONFIDENCE</span>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
              Our predictive engine leverages ensemble learning to identify patterns across 40+ behavioral dimensions.
            </p>
            <div className="space-y-6">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                <span>Feature Impact</span>
                <span>Weighting</span>
              </div>
              <div className="space-y-6">
                {[
                  { label: 'Monthly Income', weight: 85 },
                  { label: 'Overtime Engagement', weight: 70 },
                ].map(item => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex items-center gap-4">
                      <div className="flex-grow bg-white h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full" style={{ width: `${item.weight}%` }}></div>
                      </div>
                      <span className="text-xs font-bold text-on-surface w-8">{item.weight}%</span>
                    </div>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-xl border border-outline-variant/10 p-8 rounded-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-tertiary">
                <Info size={20} />
              </div>
              <h3 className="text-on-surface font-bold text-lg leading-tight font-headline">Contextual Recommendation</h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed italic">
              "Attrition is highest among Sales Executives under age 30 with frequent overtime. Focus input precision on these areas for maximum prediction reliability."
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl h-56 group border border-outline-variant/10">
            <img 
              alt="Data visualization" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyGSX_JsTxi2KDB0jFuY5i4JubWPyyY3kunATYUUcy5pt1_ZATutordjWmeSenM8-Psp7-nXCvGmpk26pjYMyDCNgz_3iJ36PcMMw6ezQxhOkG7x2W5p1Fh4VA9nxJi3nxaJ6ASMACj3NQBhJIvu9Zt9d4of3ejA932IKTkXACtjudWj3W0m9vuCOKQHypDhcdmHR_tK6I-0uMkA_T-8Jbw5cbrujO7M1-q3pnrbV16YaefgfwLX13yP4WAAeHDfnT_8TdK__d39A"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-white font-extrabold text-2xl tracking-tight font-headline">Real-time Batch Processing</span>
              <span className="text-white/80 text-sm">Now available for enterprise.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
