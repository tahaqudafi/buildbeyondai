import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export function TimelineDemo() {
    const { t } = useLanguage();
    const data = [
        {
            title: "Week 1",
            content: (
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        whileHover={{ y: -5 }}
                    >
                        <Card className="bg-card rounded-2xl p-8 mb-8 border-0 shadow-none">
                            <div className="text-center">
                                <motion.div 
                                    className="inline-flex items-center justify-center w-16 h-16 bg-primary hover:bg-primary/90 rounded-2xl mb-4 text-2xl font-bold text-primary-foreground"
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        delay: 0.2,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15
                                    }}
                                >
                                    01
                                </motion.div>

                                <motion.h3 
                                    className="text-xl font-lemonmilk font-semibold mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    {t("howItWorks.steps.week1.title")}
                                </motion.h3>
                                <motion.p 
                                    className="text-muted-foreground mb-6 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    {t("howItWorks.steps.week1.description")}
                                </motion.p>
                                <ul className="space-y-2 text-sm text-left">
                                    {(Array.isArray(t("howItWorks.steps.week1.features")) ? t("howItWorks.steps.week1.features") : []).map((item: string, index: number) => (
                                        <motion.li 
                                            key={index}
                                            className="flex items-start"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ 
                                                duration: 0.4, 
                                                delay: 0.5 + index * 0.1,
                                                ease: [0.25, 0.46, 0.45, 0.94]
                                            }}
                                        >
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                            <span className="text-muted-foreground">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            ),
        },
        {
            title: "Week 2",
            content: (
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        whileHover={{ y: -5 }}
                    >
                        <Card className="bg-card rounded-2xl p-8 mb-8 border-0 shadow-none">
                            <div className="text-center">
                                <motion.div 
                                    className="inline-flex items-center justify-center w-16 h-16 bg-primary hover:bg-primary/90 rounded-2xl mb-4 text-2xl font-bold text-primary-foreground"
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        delay: 0.2,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15
                                    }}
                                >
                                    02
                                </motion.div>

                                <motion.h3 
                                    className="text-xl font-lemonmilk font-semibold mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    {t("howItWorks.steps.week2.title")}
                                </motion.h3>
                                <motion.p 
                                    className="text-muted-foreground mb-6 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    {t("howItWorks.steps.week2.description")}
                                </motion.p>
                                <ul className="space-y-2 text-sm text-left">
                                    {(Array.isArray(t("howItWorks.steps.week2.features")) ? t("howItWorks.steps.week2.features") : []).map((item: string, index: number) => (
                                        <motion.li 
                                            key={index}
                                            className="flex items-start"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ 
                                                duration: 0.4, 
                                                delay: 0.5 + index * 0.1,
                                                ease: [0.25, 0.46, 0.45, 0.94]
                                            }}
                                        >
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                            <span className="text-muted-foreground">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            ),
        },
        {
            title: "Week 3",
            content: (
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        whileHover={{ y: -5 }}
                    >
                        <Card className="bg-card rounded-2xl p-8 mb-8 border-0 shadow-none">
                            <div className="text-center">
                                <motion.div 
                                    className="inline-flex items-center justify-center w-16 h-16 bg-primary hover:bg-primary/90 rounded-2xl mb-4 text-2xl font-bold text-primary-foreground"
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        delay: 0.2,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15
                                    }}
                                >
                                    03
                                </motion.div>

                                <motion.h3 
                                    className="text-xl font-lemonmilk font-semibold mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    {t("howItWorks.steps.week3.title")}
                                </motion.h3>
                                <motion.p 
                                    className="text-muted-foreground mb-6 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    {t("howItWorks.steps.week3.description")}
                                </motion.p>
                                <ul className="space-y-2 text-sm text-left">
                                    {(Array.isArray(t("howItWorks.steps.week3.features")) ? t("howItWorks.steps.week3.features") : []).map((item: string, index: number) => (
                                        <motion.li 
                                            key={index}
                                            className="flex items-start"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ 
                                                duration: 0.4, 
                                                delay: 0.5 + index * 0.1,
                                                ease: [0.25, 0.46, 0.45, 0.94]
                                            }}
                                        >
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                            <span className="text-muted-foreground">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen w-full">
            <Timeline data={data} />
        </div>
    );
}