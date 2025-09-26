"use client";

import {
    useScroll,
    useTransform,
    motion,
    useInView,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-background font-sans md:px-10 overflow-hidden"
            ref={containerRef}
        >
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => {
                    const itemRef = useRef<HTMLDivElement>(null);
                    const isInView = useInView(itemRef, { once: true, margin: "-100px" });

                    return (
                        <motion.div
                            key={index}
                            ref={itemRef}
                            className="flex flex-col pt-10 md:pt-30"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                        >
                            <motion.div
                                className="flex items-center mb-6 relative"
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2 + 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                            >
                                <motion.div
                                    className="h-10 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center relative z-10"
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.2 + 0.2,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15
                                    }}
                                >
                                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                                </motion.div>
                                <motion.h3
                                    className="text-2xl md:text-4xl font-bold text-neutral-500 dark:text-neutral-500 ml-6"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.2 + 0.3,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                >
                                    {item.title}
                                </motion.h3>
                            </motion.div>
                            <motion.div
                                className="relative pl-16 w-full"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2 + 0.4,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                            >
                                {item.content}
                            </motion.div>
                        </motion.div>
                    );
                })}
                <div
                    style={{
                        height: `calc(100% - 120px)`,
                        top: "60px"
                    }}
                    className="absolute left-5 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[100%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-accent to-transparent from-[0%] via-[15%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};