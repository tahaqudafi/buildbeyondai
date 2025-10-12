import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Award, ArrowRight, MapPin, Mail, ExternalLink, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
    const { t } = useLanguage();
    const teamMembers = [
        {
            name: t("aboutUs.team.taha.name"),
            role: t("aboutUs.team.taha.role"),
            image: "/images/taha.jpg",
            linkedin: "https://www.linkedin.com/in/taha-al-qudafi-4a37511b8",
            description: t("aboutUs.team.taha.description")
        },
        {
            name: t("aboutUs.team.irini.name"),
            role: t("aboutUs.team.irini.role"),
            image: "/images/irini.png",
            linkedin: "https://www.linkedin.com/in/irini-anastasiadou-b5394968?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            description: t("aboutUs.team.irini.description")
        }
    ];

    const values = [
        {
            icon: Users,
            title: t("aboutUs.values.humanFirstAI.title"),
            description: t("aboutUs.values.humanFirstAI.description")
        },
        {
            icon: Target,
            title: t("aboutUs.values.serviceFocused.title"),
            description: t("aboutUs.values.serviceFocused.description")
        },
        {
            icon: Lightbulb,
            title: t("aboutUs.values.movingFast.title"),
            description: t("aboutUs.values.movingFast.description")
        },
        {
            icon: Award,
            title: t("aboutUs.values.realResults.title"),
            description: t("aboutUs.values.realResults.description")
        }
    ];

    const stats = [
        { number: t("aboutUs.stats.uptime"), label: t("aboutUs.stats.uptimeLabel") },
        { number: t("aboutUs.stats.responseTime"), label: t("aboutUs.stats.responseTimeLabel") },
        { number: t("aboutUs.stats.reliability"), label: t("aboutUs.stats.reliabilityLabel") }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-hero"></div>
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">


                        <motion.h1
                            className="text-hero font-lemonmilk mb-6 max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {t("aboutUs.title")}
                        </motion.h1>

                        <motion.p
                            className="text-subheading text-muted-foreground max-w-3xl mx-auto mb-10"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {t("aboutUs.subtitle")}
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-xl sm:text-2xl lg:text-3xl font-lemonmilk font-bold text-primary mb-1 sm:mb-2">{stat.number}</div>
                                    <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why We Started Section */}
            <section className="pb-16 lg:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-lemonmilk font-bold mb-8">{t("aboutUs.whyWeStarted.title")}</h2>
                        <div className="space-y-6 text-lg text-muted-foreground max-w-4xl">
                            <p>
                                {t("aboutUs.whyWeStarted.content")}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-lemonmilk font-bold mb-8">{t("aboutUs.whatWeBelieve.title")}</h2>
                        <div className="space-y-6 text-lg text-muted-foreground max-w-4xl">
                            <p>
                                {t("aboutUs.whatWeBelieve.content")}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-lemonmilk font-bold mb-8">{t("aboutUs.howWereDifferent.title")}</h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{t("aboutUs.howWereDifferent.humanFirst.title")}</h3>
                                        <p className="text-muted-foreground">{t("aboutUs.howWereDifferent.humanFirst.description")}</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{t("aboutUs.howWereDifferent.alwaysOn.title")}</h3>
                                        <p className="text-muted-foreground">{t("aboutUs.howWereDifferent.alwaysOn.description")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{t("aboutUs.howWereDifferent.onBrand.title")}</h3>
                                        <p className="text-muted-foreground">{t("aboutUs.howWereDifferent.onBrand.description")}</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{t("aboutUs.howWereDifferent.serviceFocused.title")}</h3>
                                        <p className="text-muted-foreground">{t("aboutUs.howWereDifferent.serviceFocused.description")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-lemonmilk font-bold mb-8">{t("aboutUs.whereWereGoing.title")}</h2>
                        <div className="space-y-6 text-lg text-muted-foreground max-w-4xl">
                            <p>
                                {t("aboutUs.whereWereGoing.content")}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 lg:py-24 bg-card/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-lemonmilk font-bold mb-4">{t("aboutUs.values.title")}</h2>
                        <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
                            {t("aboutUs.values.subtitle")}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <value.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-lemonmilk font-bold mb-4">{t("aboutUs.team.title")}</h2>
                        <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
                            {t("aboutUs.team.subtitle")}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 h-full">
                                    <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                                        <img 
                                            src={member.image} 
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                    <p className="text-primary font-medium mb-3">{member.role}</p>
                                    <p className="text-muted-foreground mb-4">{member.description}</p>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                                    >
                                        <Linkedin className="w-4 h-4 mr-2" />
                                        {t("aboutUs.team.linkedinText")}
                                    </a>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 lg:py-24 bg-card/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-lemonmilk font-bold mb-4">{t("aboutUs.contact.title")}</h2>
                        <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
                            {t("aboutUs.contact.subtitle")}
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto items-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-6 text-center">
                            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                            <h3 className="font-semibold mb-2">{t("aboutUs.contact.location")}</h3>
                            <p className="text-muted-foreground">{t("aboutUs.contact.locationValue")}</p>
                        </Card>

                        <Card className="p-6 text-center">
                            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                            <h3 className="font-semibold mb-2">{t("aboutUs.contact.email")}</h3>
                            <a href="mailto:taha@buildbeyondai.com" className="text-primary hover:text-primary/80 transition-colors">
                                taha@buildbeyondai.com
                            </a>
                        </Card>

                        <div className="flex justify-center">
                            <Button className="px-8 py-4" onClick={() => {
                                const element = document.getElementById('get-started');
                                if (element) {
                                    window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
                                }
                            }}>
                                {t("aboutUs.contact.bookDemo")}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <GetStarted />

            <Footer />
        </div>
    );
};

export default AboutUs;