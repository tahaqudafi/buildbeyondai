import { useState } from "react";
import { CheckCircle, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const GetStarted = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        e.currentTarget.reset();
        
        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="get-started" className="pt-1 pb-20 lg:pb-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-display font-lemonmilk mb-4">{t("getStarted.title")}</h3>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              {t("getStarted.subtitle")}
            </p>
          </div>

          <div className="relative">
            {/* Success Animation Overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-primary rounded-2xl flex items-center justify-center z-10 animate-in fade-in duration-500">
                <div className="text-center text-white">
                  <div className="relative mb-6">
                    {/* Success Icon with Pulse Animation */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4 animate-pulse">
                      <CheckCircle className="h-12 w-12 text-white animate-in zoom-in duration-700 delay-200" />
                    </div>

                    {/* Sparkle Effects */}
                    <div className="absolute -top-2 -right-2 animate-bounce delay-300">
                      <Sparkles className="h-6 w-6 text-white/80" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 animate-bounce delay-500">
                      <Sparkles className="h-4 w-4 text-white/80" />
                    </div>
                    <div className="absolute top-1/2 -right-8 animate-bounce delay-700">
                      <Sparkles className="h-5 w-5 text-white/80" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 animate-in slide-in-from-bottom duration-500 delay-300">
                    {t("getStarted.form.successTitle")}
                  </h3>
                  <p className="text-lg opacity-90 animate-in slide-in-from-bottom duration-500 delay-500">
                    {t("getStarted.form.successMessage")}
                  </p>

                  {/* Animated Progress Bar */}
                  <div className="mt-6 w-64 mx-auto">
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full animate-in slide-in-from-left duration-5000 ease-out"></div>
                    </div>
                    <p className="text-sm mt-2 opacity-75">{t("getStarted.form.successNote")}</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-300 ${isSubmitted ? 'opacity-20' : 'opacity-100'}`}>
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="61d71618-bab1-469d-bc83-51075999ce57" />
              
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                  {t("getStarted.form.firstName")} *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder={t("getStarted.form.placeholders.firstName")}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                  {t("getStarted.form.lastName")} *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder={t("getStarted.form.placeholders.lastName")}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  {t("getStarted.form.email")} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder={t("getStarted.form.placeholders.email")}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  {t("getStarted.form.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder={t("getStarted.form.placeholders.phone")}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-foreground">
                  {t("getStarted.form.company")} *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder={t("getStarted.form.placeholders.company")}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="industry" className="text-sm font-medium text-foreground">
                  {t("getStarted.form.industry")}
                </label>
                <select
                  id="industry"
                  name="industry"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                >
                  <option value="">{t("getStarted.form.industries.default")}</option>
                  <option value="healthcare">{t("getStarted.form.industries.healthcare")}</option>
                  <option value="real-estate">{t("getStarted.form.industries.realEstate")}</option>
                  <option value="automotive">{t("getStarted.form.industries.automotive")}</option>
                  <option value="professional-services">{t("getStarted.form.industries.professionalServices")}</option>
                  <option value="retail">{t("getStarted.form.industries.retail")}</option>
                  <option value="other">{t("getStarted.form.industries.other")}</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  {t("getStarted.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  placeholder={t("getStarted.form.placeholders.message")}
                ></textarea>
              </div>

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`btn-hero px-8 py-4 text-lg transition-all duration-300 ${isSubmitting
                    ? 'opacity-75 cursor-not-allowed transform scale-95'
                    : isSubmitted
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:scale-105'
                    }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      {t("getStarted.form.sending")}
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      {t("getStarted.form.sent")}
                    </span>
                  ) : (
                    t("getStarted.form.submit")
                  )}
                </button>
                <p className="text-sm text-muted-foreground mt-4">
                  {t("getStarted.form.guarantee")}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
