"use client";
import { useState } from "react";
import BudgetForm from "@/components/BudgetForm";
import { fetchBudget } from "@/lib/api";

export default function Home() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formData: any) => {
    setLoading(true);
    setResult("");
    try {
      const res = await fetchBudget(formData);
      setResult(res.result);
    } catch (err) {
      console.error(err);
      setResult("❌ Failed to fetch budget. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">💰 AI Budget Planner</h1>
      <BudgetForm onSubmit={handleFormSubmit} />

      {loading && (
        <div className="mt-6 text-blue-600 font-medium animate-pulse">Generating your plan...</div>
      )}

     {!loading && result && (
        <div className="mt-6 bg-green-100 border border-green-400 text-green-800 p-4 rounded-lg whitespace-pre-wrap text-sm leading-relaxed shadow-sm">
          {typeof result === "string" ? result : JSON.stringify(result, null, 2)}
        </div>
      )}

    </main>
  );
}
