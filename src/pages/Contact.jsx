import React, { useState } from "react";
import Input from "../components/Input";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "名前は必須です。";
    else if (form.name.length > 50)
      newErrors.name = "名前は30文字以内で入力してください。";
    if (!form.email.trim()) newErrors.email = "メールアドレスは必須です。";
    else if (!/^[^/\s@]+@[^/\s@]+\.[^/\s@]+$/.test(form.email))
      newErrors.email = "メールアドレスの形式が正しくありません。";
    if (!form.message.trim()) newErrors.message = "本文は必須です。";
    else if (form.message.length > 500)
      newErrors.message = "本文は500文字以内で入力してください。";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    try {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      alert("送信しました");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert(`送信に失敗しました: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClear = () => {
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <div className="max-w-[800px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">お問い合わせフォーム</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex items-center gap-4">
          <label className="text-sm font-medium w-24 flex-shrink-0">
            お名前
          </label>
          <div className="flex-1">
            <Input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>
        </div>
        <div className="mb-4 flex items-center gap-4">
          <label className="text-sm font-medium w-24 flex-shrink-0">
            メールアドレス
          </label>
          <div className="flex-1">
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="mb-4 flex items-center gap-4">
          <label className="text-sm font-medium w-24 flex-shrink-0 ">
            本文
          </label>
          <div className="flex-1">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              disabled={isSubmitting}
              rows={8}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message}</p>
            )}
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg"
          >
            {isSubmitting ? "送信中..." : "送信"}
          </button>
          <button
            type="button"
            onClick={handleClear}
            disabled={isSubmitting}
            className="bg-gray-200 font-bold py-2 px-4 rounded-lg"
          >
            クリア
          </button>
        </div>
      </form>
    </div>
  );
}
