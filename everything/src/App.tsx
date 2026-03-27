import React, { useState } from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Predict from "./components/Predict";
import Results from "./components/Results";
import About from "./components/About";
import { Page, EmployeeData, PredictionResult } from "./types";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [predictionResult, setPredictionResult] =
    useState<PredictionResult | null>(null);

  // ✅ NEW ML CONNECTED FUNCTION
  const handlePredict = async (data: EmployeeData) => {
    try {
      const formattedData = {
        Age: data.age,
        MonthlyIncome: data.monthlyIncome,
        Department: data.department,
        JobRole: data.jobRole,
        YearsAtCompany: data.yearsAtCompany,
        TotalWorkingYears: data.totalWorkingYears,
        JobLevel: data.jobLevel,
        DistanceFromHome: data.distanceFromHome,
        StockOptionLevel: data.stockOptionLevel,
        OverTime: data.overtime ? "Yes" : "No",
        JobSatisfaction: data.jobSatisfaction,
        WorkLifeBalance: data.workLifeBalance,
        JobInvolvement: data.jobInvolvement,
        PerformanceRating: data.performanceRating,

        // 🔥 ADD THESE (VERY IMPORTANT)
        LowIncome: data.monthlyIncome < 3000 ? 1 : 0,

        ExtremeStress: data.overtime && data.workLifeBalance <= 2 ? 1 : 0,

        LowSatisfaction: data.jobSatisfaction <= 2 ? 1 : 0,

        HighRiskCombo:
          data.monthlyIncome < 3000 &&
          data.jobSatisfaction <= 2 &&
          data.overtime
            ? 1
            : 0,
      };

      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      const result = await res.json();

      console.log(result); // 👈 DEBUG (keep for now)

      // 🔥 SAFETY CHECK
      if (!result.probability) {
        alert(result.error || "Backend error");
        return;
      }

      const leaveProb = result.probability;
      const stayProb = 1 - leaveProb;

      const isHighRisk =
        data.monthlyIncome < 3000 && data.jobSatisfaction <= 2 && data.overtime;

      const status =
        leaveProb > 0.3 || isHighRisk ? "Likely to Leave" : "Likely to Stay";

      const confidence = Math.round(
        (leaveProb > 0.3 ? leaveProb : 1 - leaveProb) * 100,
      );

      const resultData: PredictionResult = {
        employeeId: `#ML-${Math.floor(1000 + Math.random() * 9000)}`,
        department: data.department,
        confidence,
        status,
        insights: [],
      };

      setPredictionResult(resultData);
      setCurrentPage("results");
    } catch (err) {
      console.error("API Error:", err);
      alert("Backend not connected!");
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={setCurrentPage} />;
      case "predict":
        return <Predict onPredict={handlePredict} />;
      case "results":
        return predictionResult ? (
          <Results
            result={predictionResult}
            onReset={() => setCurrentPage("predict")}
          />
        ) : (
          <Predict onPredict={handlePredict} />
        );
      case "about":
        return <About />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}
