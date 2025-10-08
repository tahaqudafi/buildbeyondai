import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function TimelineDemo() {
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
                                    Connect & Configure
                                </motion.h3>
                                <motion.p 
                                    className="text-muted-foreground mb-6 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    Connect your phone number and CRM. We'll configure call flows, compliance settings, and voice preferences.
                                </motion.p>
                                <ul className="space-y-2 text-sm text-left">
                                    {[
                                        "Phone number porting or forwarding",
                                        "CRM integration (Google calendar, Slack, etc.)",
                                        "Industry-specifics",
                                        "Compliance & consent setup"
                                    ].map((item, index) => (
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
                                    Customize & Train
                                </motion.h3>
                                <motion.p 
                                    className="text-muted-foreground mb-6 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    Build custom conversation flows, train the AI with your FAQs, and fine-tune the voice to match your brand.
                                </motion.p>
                                <ul className="space-y-2 text-sm text-left">
                                    {[
                                        "Conversation flow design",
                                        "FAQ training & responses",
                                        "Voice tone customization",
                                        "Integration testing"
                                    ].map((item, index) => (
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
                                    Go Live & Monitor
                                </motion.h3>
                                <motion.p 
                                    className="text-muted-foreground mb-6 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    Launch your AI voice agent with real-time monitoring, analytics dashboard, and continuous optimization.
                                </motion.p>
                                <ul className="space-y-2 text-sm text-left">
                                    {[
                                        "Soft launch with monitoring",
                                        "Real-time analytics",
                                        "Performance optimization",
                                        "24/7 support & monitoring"
                                    ].map((item, index) => (
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