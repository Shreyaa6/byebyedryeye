import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, ChevronRight, User, Eye, Search, AlertCircle, Quote, X, ArrowLeft } from 'lucide-react';

const BlogCard = ({ blog, idx, onRead }) => (
    <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1, duration: 0.8 }}
        viewport={{ once: true }}
        className="glass-card"
        style={{
            padding: '3.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            border: '1px solid var(--aloe)',
            height: '100%',
            justifyContent: 'space-between'
        }}>
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <span className="badge" style={{ margin: 0, padding: '0.2rem 0', borderBottom: '1px solid var(--olive)' }}>{blog.category}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                    <Clock size={12} />
                    <span>{blog.date.toUpperCase()}</span>
                </div>
            </div>
            <div style={{ height: '220px', width: '100%', marginBottom: '2rem', overflow: 'hidden', borderRadius: '2px' }}>
                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--moss)', marginBottom: '1.5rem', lineHeight: '1.3', fontFamily: 'var(--font-heading)' }}>{blog.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '3rem', lineHeight: '1.8' }}>{blog.excerpt}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--aloe)', paddingTop: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.85rem', fontWeight: 500, color: 'var(--moss)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--aloe)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cypress)' }}>
                    <User size={16} strokeWidth={1.5} />
                </div>
                <span>{blog.author}</span>
            </div>
            <button onClick={() => onRead(blog)} className="btn-secondary" style={{ fontSize: '0.7rem' }}>
                READ ANALYSIS
            </button>
        </div>
    </Motion.div>
);

const FullArticle = ({ blog, onBack }) => (
    <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'var(--bg)',
            zIndex: 2000,
            overflowY: 'auto',
            padding: '4rem 0'
        }}
    >
        <div className="container" style={{ maxWidth: '900px' }}>
            <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--moss)', marginBottom: '4rem', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em' }}>
                <ArrowLeft size={20} /> BACK TO LIBRARY
            </button>

            <div className="badge">{blog.category}</div>
            <h1 style={{ fontSize: '4rem', color: 'var(--moss)', marginBottom: '2rem' }}>{blog.title}</h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <User size={16} /> <span>{blog.author}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={16} /> <span>{blog.date}</span>
                </div>
            </div>

            <div style={{ width: '100%', height: '500px', marginBottom: '4rem', overflow: 'hidden' }}>
                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ fontSize: '1.2rem', color: 'var(--moss)', lineHeight: '2', whiteSpace: 'pre-line' }}>
                {blog.content}
            </div>

            <div style={{ marginTop: '8rem', padding: '4rem', background: 'var(--aloe)', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>Want more clinical insights?</h3>
                <p style={{ marginBottom: '2.5rem', color: 'var(--text-muted)' }}>Join our monthly research network for the latest on ocular health.</p>
                <button className="btn-primary">Subscribe to Protocol</button>
            </div>
        </div>
    </Motion.div>
);

const BlogPage = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const blogs = [
        {
            title: "The Clinical Reality of Post-LASIK Ocular Surface Disease",
            category: "Clinical Analysis",
            author: "Dr. Elena Moss",
            excerpt: "A deep dive into why refractive surgery prioritizes visual acuity over ocular comfort, and the metabolic impact on the corneal nerves.",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            date: "March 12, 2024",
            readTime: "12 min read",
            content: `The success of refractive surgery is historically quantified by its ability to achieve 20/20 vision. However, for a significant percentage of patients, this visual clarity comes at a devastating cost to ocular comfort. 
            
            Corneal refractive surgery, by its very nature, involves a massive disruption to the corneal subbasal nerve plexus. These nerves are responsible for the feedback loop that triggers tear production. When they are severed during the creation of a LASIK flap, the eye essentially 'forgets' to blink and produce the necessary lipid layer.

            While most surgeons describe 'dryness' as a temporary side effect, modern clinical data suggests that for a subset of patients, this progresses into chronic neuropathic pain. The corneal surface becomes height-sensitive, and the lacrimal gland stasis becomes permanent. 

            In this analysis, we review the latest studies on nerve regeneration and why preoperative OSDI screening is the single most important step a patient can take before considering surgery.`
        },
        {
            title: "The Endocrinology of Tear Production",
            category: "ENDOCRINOLOGY",
            excerpt: "Understanding the complex relationship between hormonal shifts and meibomian gland health in women's health.",
            image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=800",
            author: "Dr. Sarah Peterson",
            date: "February 28, 2024",
            readTime: "15 min read",
            content: `Dry eye is frequently dismissed as an environmental issue—too much screen time, too little humidity. But for many women, the root cause is biochemical. 

            Meibomian glands, the tiny oil factories in our eyelids, are androgen-sensitive organs. Much like the sebaceous glands in our skin, they rely on a specific hormonal balance to produce high-quality lipids. When androgen levels drop—whether due to menopause, oral contraceptives, or PCOS—the meibum (oil) shifts from a liquid state to a thick, waxy consistency. This leads to the clogging of glands and the rapid evaporation of tears.

            Traditional treatments like 'artificial tears' are merely band-aids for this internal systemic issue. Clinical success in these cases often requires a collaborative approach between ophthalmology and endocrinology to address the underlying hormonal stasis.`
        },
        {
            date: "Mar 05, 2026",
            author: "Liam Chen",
            excerpt: "Constant vs. variable heat: why traditional compresses fail to reach the melting point of inspissated meibum.",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
            content: `Meibomian Gland Dysfunction (MGD) is effectively a state of 'congealed oil.' To restore flow, we must reach the transition temperature where these oils become liquid—typically around 104°F (40°C).

            The problem with the classic 'warm washcloth' is physics. Within 60 seconds of leaving the tap, a washcloth drops below the therapeutic threshold. Furthermore, the skin of the eyelid acts as a heat sink, dissipating energy before it reaches the glands.

            Effective thermal therapy requires two things: Consistency and Duration. New infrared and hydro-bead technologies (like the Eylys protocol) maintain a steady 104°F for the full 10-15 minutes required for deep liquification. In this white paper, we compare digital heating masks against traditional methods to show why 'steady-state' heat is the only way to achieve clinical results.`
        }
    ];

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="blog-page">
            <AnimatePresence>
                {selectedBlog && (
                    <FullArticle
                        blog={selectedBlog}
                        onBack={() => setSelectedBlog(null)}
                    />
                )}
            </AnimatePresence>

            {/* Featured Header */}
            <section style={{
                paddingTop: '10rem',
                paddingBottom: '10rem',
                background: 'var(--bg)',
                textAlign: 'center'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <div className="badge">Medical Library</div>
                        <h1 style={{ fontSize: '4.5rem', maxWidth: '1000px', margin: '0 auto 2.5rem', color: 'var(--moss)' }}>
                            The Science of <span style={{ fontStyle: 'italic', fontWeight: '400' }}>Comfort</span>.
                        </h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto 5rem', fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.9' }}>
                            Bridging the gap between clinical research and patient experience. We analyze the newest trials to provide the clarity your vision deserves.
                        </p>

                        <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
                            <div style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--cypress)' }}>
                                <Search size={20} strokeWidth={1.5} />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search Clinical Topics (e.g., IPL, Omega-3, LASIK)..."
                                style={{
                                    width: '100%',
                                    padding: '1.8rem 2rem 1.8rem 5rem',
                                    border: '1px solid var(--aloe)',
                                    background: 'var(--white)',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    color: 'var(--moss)',
                                    fontFamily: 'var(--font-body)',
                                    boxShadow: 'var(--shadow-lux)'
                                }}
                            />
                        </div>
                    </Motion.div>
                </div>
            </section>

            {/* Main Grid */}
            <section style={{ background: 'var(--aloe)', paddingBottom: '12rem' }}>
                <div className="container">
                    {filteredBlogs.length > 0 ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '4rem', marginTop: '-4rem' }}>
                            {filteredBlogs.map((blog, idx) => (
                                <BlogCard key={idx} blog={blog} idx={idx} onRead={setSelectedBlog} />
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '10rem 0' }}>
                            <AlertCircle size={48} color="var(--olive)" style={{ marginBottom: '2rem', opacity: 0.5 }} />
                            <h3 style={{ color: 'var(--moss)' }}>No research found for "{searchQuery}"</h3>
                            <button onClick={() => setSearchQuery("")} className="btn-secondary" style={{ marginTop: '2rem' }}>Clear Search</button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter / Join the Library */}
            <section style={{ padding: '0' }}>
                <div className="luxury-grid" style={{ gap: '0' }}>
                    <div style={{ gridColumn: 'span 6', background: 'var(--moss)', padding: '10rem 10%' }}>
                        <div className="badge" style={{ color: 'var(--cedar)', borderColor: 'var(--cypress)' }}>Clinical Subscription</div>
                        <h2 style={{ fontSize: '3.5rem', color: 'var(--white)', marginBottom: '2.5rem' }}>Never Miss a Clinical Breakthrough.</h2>
                        <p style={{ color: 'var(--cedar)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '4rem' }}>
                            Our monthly clinical digest is curated by researchers and patient advocates. No marketing, no noise—just the data that impacts your life.
                        </p>
                        <div style={{ display: 'flex', borderBottom: '1px solid var(--cypress)', paddingBottom: '1rem', maxWidth: '500px' }}>
                            <input
                                type="email"
                                placeholder="Clinical Email Address"
                                style={{ flex: 1, background: 'none', border: 'none', color: 'var(--white)', fontSize: '1rem', outline: 'none' }}
                            />
                            <button className="btn-primary" style={{ background: 'var(--olive)', color: 'var(--moss)', padding: '0.8rem 2rem' }}>
                                JOIN NETWORK
                            </button>
                        </div>
                    </div>
                    <div style={{ gridColumn: 'span 6', background: 'var(--cypress)', overflow: 'hidden' }}>
                        <img
                            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200"
                            alt="Medical Library"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                        />
                    </div>
                </div>
            </section>

            {/* Patient Stories Mini-section */}
            <section style={{ background: 'var(--bg)', padding: '12rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                        <div className="badge">Testimonials</div>
                        <h2 style={{ fontSize: '3.5rem', color: 'var(--moss)' }}>The Human Impact</h2>
                    </div>
                    <div className="luxury-grid">
                        <div style={{ gridColumn: 'span 6', padding: '0 4rem' }}>
                            <Quote size={48} color="var(--olive)" style={{ opacity: 0.3, marginBottom: '2rem' }} />
                            <p style={{ fontSize: '1.6rem', color: 'var(--moss)', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '2.5rem', fontFamily: 'var(--font-heading)' }}>
                                "Finding this library was the turning point in my recovery. I finally had the research to challenge my clinical team and demand IPL."
                            </p>
                            <span style={{ fontWeight: 600, color: 'var(--cypress)', letterSpacing: '0.1em', fontSize: '0.8rem' }}>— PROF. JAMES T., OSDI GRADE 4</span>
                        </div>
                        <div style={{ gridColumn: 'span 6', padding: '0 4rem' }}>
                            <Quote size={48} color="var(--olive)" style={{ opacity: 0.3, marginBottom: '2rem' }} />
                            <p style={{ fontSize: '1.6rem', color: 'var(--moss)', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '2.5rem', fontFamily: 'var(--font-heading)' }}>
                                "The analysis of hormone modulation changed everything. Within 3 months of following the roadmap here, my symptoms decreased by 70%."
                            </p>
                            <span style={{ fontWeight: 600, color: 'var(--cypress)', letterSpacing: '0.1em', fontSize: '0.8rem' }}>— MARIA L., CHRONIC SUFFERER</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;

