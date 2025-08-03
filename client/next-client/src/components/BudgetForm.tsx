"use client";
import { useState } from "react";

type Props = {
  onSubmit: (data: any) => void;
};

export default function BudgetForm({ onSubmit }: Props) {
  const [form, setForm] = useState({
    income: "",
    fixed: "",
    variable: "",
    goal: "",
    months: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = {
      income: Number(form.income),
      fixed: Number(form.fixed),
      variable: Number(form.variable),
      goal: Number(form.goal),
      months: Number(form.months),
    };
    onSubmit(formatted);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {[
        { label: "Monthly Income (₹)", name: "income" },
        { label: "Fixed Expenses (₹)", name: "fixed" },
        { label: "Variable Expenses (₹)", name: "variable" },
        { label: "Savings Goal (₹)", name: "goal" },
        { label: "Timeframe (months)", name: "months" },
      ].map(({ label, name }) => (
        <div key={name} className="flex flex-col">
          <label className="text-sm font-medium mb-1">{label}</label>
          <input
            type="number"
            name={name}
            value={form[name as keyof typeof form]}
            onChange={handleChange}
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
      >
        Generate Budget
      </button>
    </form>
  );
}
