import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
  return (
        <div className="bg-black text-white min-h-screen">
            <header className="absolute top-0 left-0 right-0 z-20">
                <div className="mx-auto max-w-[1200px] px-6">
                    <nav className="h-16 flex items-center justify-center text-center relative">

                        <ul className="hidden md:flex w-full items-center justify-center gap-6 text-sm text-white">
                            <li><Link className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" to="/LandingPage">Home</Link></li>
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#read">Read</a></li>
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#characters">Characters</a></li>
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#gallery">Gallery</a></li>
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#nfts">NFTs</a></li>
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#token">Token</a></li>
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#shop">Shop</a></li>
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#community">Community</a></li>
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#roadmap">Roadmap</a></li>
                        </ul>
                        <button
                            className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded hover:bg-white/10"
                            aria-label="Open menu"
                            onClick={() => setMobileOpen(true)}
                        >
                            <img
                                src="https://res.cloudinary.com/dgxvuw8wd/image/upload/v1759659760/download-removebg-preview_1_kyk1u9.png"
                                alt="Menu"
                                className="w-7 h-7 object-contain"
                                loading="eager"
                            />
                        </button>
                    </nav>
                </div>
            </header>

            {mobileOpen && (
                <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-sm">
                    <div className="absolute right-4 top-4">
                        <button
                            className="p-2 rounded hover:bg-white/10"
                            aria-label="Close menu"
                            onClick={() => setMobileOpen(false)}
                        >
                            <img
                                src="https://res.cloudinary.com/dgxvuw8wd/image/upload/v1759659760/download-removebg-preview_1_kyk1u9.png"
                                alt="Close"
                                className="w-7 h-7 rotate-90 opacity-80"
                            />
                        </button>
                    </div>
                    <div className="h-full flex items-center justify-center">
                        <ul className="flex flex-col items-center gap-6 text-lg text-white">
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#read" onClick={() => setMobileOpen(false)}>Read</a></li>
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#characters" onClick={() => setMobileOpen(false)}>Characters</a></li>
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#gallery" onClick={() => setMobileOpen(false)}>Gallery</a></li>
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#nfts" onClick={() => setMobileOpen(false)}>NFTs</a></li>
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#token" onClick={() => setMobileOpen(false)}>Token</a></li>
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#shop" onClick={() => setMobileOpen(false)}>Shop</a></li>
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#community" onClick={() => setMobileOpen(false)}>Community</a></li>
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#roadmap" onClick={() => setMobileOpen(false)}>Roadmap</a></li>
                            <li><a className="transition-colors duration-200 hover:text-[var(--wg-neon-red)]" href="#contact" onClick={() => setMobileOpen(false)}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            )}

            <section className="relative w-[100%] h-[85vh] overflow-hidden">
                <img
                    src="https://res.cloudinary.com/dgxvuw8wd/image/upload/v1759655217/openart-video_816f1252_1759343042585_efwlyy.gif"
                    alt="Wolf Gang neon alley"
                className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

                <div className="relative z-10 h-full">
                    <div className="mx-auto max-w-[1200px] h-full px-6 flex flex-col items-center justify-center text-center">
                        <div className="uppercase tracking-[0.35em] text-sm text-white/70 mb-4">New Jack City meets Underworld</div>
                        <h1 className="text-5xl md:text-6xl font-black leading-tight neon-glow text-[var(--wg-neon-red)]">WOLF GANG</h1>
                        <p className="mt-4 max-w-2xl text-white/80">A young pack claws for power in Shadow City. Blood, loyalty, and the night itself.</p>
                        <div className="mt-8 flex items-center gap-4">
                            <a href="/LandingPage" className="px-5 py-3 rounded-full bg-[var(--wg-neon-red)] text-black font-semibold hover:opacity-90 transition-opacity">Join the pack</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="marquee">
                <div className="marquee__inner">
                    <span className="marquee__chip"><span className="w-2 h-2 rounded-full bg-[var(--wg-neon-red)] inline-block"></span> Drop: Night Run Jacket</span>
                    <span className="marquee__chip"><span className="w-2 h-2 rounded-full bg-[var(--wg-cyber-blue)] inline-block"></span> Excerpt: Shadow City — Chapter 1</span>
                    <span className="marquee__chip"><span className="w-2 h-2 rounded-full bg-[var(--wg-blood-rose)] inline-block"></span> Token: $WGANG utilities live</span>
                    {/* duplicate for seamless loop */}
                    <span className="marquee__chip"><span className="w-2 h-2 rounded-full bg-[var(--wg-neon-red)] inline-block"></span> Drop: Night Run Jacket</span>
                    <span className="marquee__chip"><span className="w-2 h-2 rounded-full bg-[var(--wg-cyber-blue)] inline-block"></span> Excerpt: Shadow City — Chapter 1</span>
                    <span className="marquee__chip"><span className="w-2 h-2 rounded-full bg-[var(--wg-blood-rose)] inline-block"></span> Token: $WGANG utilities live</span>
                    <span className="marquee__chip"><span className="w-2 h-2 rounded-full bg-[var(--wg-neon-red)] inline-block"></span> Join the Pack — Discord</span>
                    <span className="marquee__chip"><span className="w-2 h-2 rounded-full bg-[var(--wg-cyber-blue)] inline-block"></span> Gallery: New concept art</span>
                </div>
            </section>
            <section id="read" className="px-6 py-12">
                <div className="mx-auto max-w-[1300px] flex flex-col md:flex-row items-center gap-8">
                    <div className="read-img w-full md:w-1/2 flex justify-center">
                        <img className="max-w-full h-auto object-contain" src="https://res.cloudinary.com/dgxvuw8wd/image/upload/v1759658045/logo-removebg-preview_ia9dw8.png" alt="Read Wolf Gang" />
                    </div>
                    <div className="read w-full md:w-1/2 text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center">The Wolf Gang</h2>
                        <p className="text-white/80 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti iure nulla itaque esse nisi, impedit dolore blanditiis odio, animi accusantium harum neque cum sed explicabo id iste maxime culpa? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, enim, tempora quidem iusto illo quia, voluptate amet blanditiis dolorum eligendi officiis ipsa autem dicta at deleniti. Saepe inventore facere ea.</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sit incidunt, odit deserunt sunt soluta dignissimos iste ipsam aut, similique quaerat unde aliquid neque velit maxime! Nihil sapiente ratione illum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sequi amet voluptate fuga cumque vero iusto? Sint deserunt voluptates, maxime molestiae alias est odit explicabo illo dolores earum beatae cupiditate?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque hic odit est illo dolores sapiente sit sequi rerum fuga veniam voluptates, aperiam, magni quos consequuntur! Earum at fuga molestiae nulla!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eius deleniti quasi excepturi eaque veniam repellendus eligendi, possimus omnis reiciendis? Fuga quibusdam omnis reprehenderit sapiente repellendus earum ducimus assumenda unde!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem, vitae eligendi maxime facilis accusamus vero autem et placeat. Odit possimus sapiente quae deserunt, unde natus neque recusandae aliquid quo?
                    </div>
                </div>
            </section>
            <section className="marquee">
                <div className="marquee__inner">
                    <span className="marquee__chip"><span className="w-2 h-2 rounded-full bg-[var(--wg-neon-red)] inline-block"></span> Drop: Night Run Jacket</span>
                    <span className="marquee__chip"><span className="w-2 h-2 rounded-full bg-[var(--wg-cyber-blue)] inline-block"></span> Excerpt: Shadow City — Chapter 1</span>
                    <span className="marquee__chip"><span className="w-2 h-2 rounded-full bg-[var(--wg-blood-rose)] inline-block"></span> Token: $WGANG utilities live</span>
                    {/* duplicate for seamless loop */}
                    <span className="marquee__chip"><span className="w-2 h-2 rounded-full bg-[var(--wg-neon-red)] inline-block"></span> Drop: Night Run Jacket</span>
                    <span className="marquee__chip"><span className="w-2 h-2 rounded-full bg-[var(--wg-cyber-blue)] inline-block"></span> Excerpt: Shadow City — Chapter 1</span>
                    <span className="marquee__chip"><span className="w-2 h-2 rounded-full bg-[var(--wg-blood-rose)] inline-block"></span> Token: $WGANG utilities live</span>
                    <span className="marquee__chip"><span className="w-2 h-2 rounded-full bg-[var(--wg-neon-red)] inline-block"></span> Join the Pack — Discord</span>
                    <span className="marquee__chip"><span className="w-2 h-2 rounded-full bg-[var(--wg-cyber-blue)] inline-block"></span> Gallery: New concept art</span>
                </div>
            </section>
            <section id="characters" className="px-6 py-16">
                <div className="characters mx-auto max-w-[1200px]">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-8 text-center">MEET THE WOLF GANG</h2>
                    <div className="card-cover grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="card group bg-black/50 rounded-xl border border-white/10 overflow-hidden hover:border-[var(--wg-neon-red)] transition-colors">
                            <div className="card-img">
                                <img className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-[1.03]" src="https://res.cloudinary.com/dgxvuw8wd/image/upload/v1759660671/openart-video_9c22b562_1759660290498_dabvhf.webp" alt="Carter" />
                            </div>
                            <div className="card-name p-4 text-center">
                                <h3 className="font-semibold">Carter</h3>
                            </div>
                        </div>
                        <div className="card group bg-black/50 rounded-xl border border-white/10 overflow-hidden hover:border-[var(--wg-neon-red)] transition-colors">
                            <div className="card-img">
                                <img className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-[1.03]" src="https://res.cloudinary.com/dgxvuw8wd/image/upload/v1759660671/openart-video_9c22b562_1759660290498_dabvhf.webp" alt="Jaxxie" />
                            </div>
                            <div className="card-name p-4 text-center">
                                <h3 className="font-semibold">Jaxxie</h3>
                            </div>
                        </div>
                        <div className="card group bg-black/50 rounded-xl border border-white/10 overflow-hidden hover:border-[var(--wg-neon-red)] transition-colors">
                            <div className="card-img">
                                <img className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-[1.03]" src="https://res.cloudinary.com/dgxvuw8wd/image/upload/v1759660671/openart-video_9c22b562_1759660290498_dabvhf.webp" alt="Raider" />
                            </div>
                            <div className="card-name p-4 text-center">
                                <h3 className="font-semibold">Raider</h3>
                            </div>
                        </div>
                        <div className="card group bg-black/50 rounded-xl border border-white/10 overflow-hidden hover:border-[var(--wg-neon-red)] transition-colors">
                            <div className="card-img">
                                <img className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-[1.03]" src="https://res.cloudinary.com/dgxvuw8wd/image/upload/v1759660671/openart-video_9c22b562_1759660290498_dabvhf.webp" alt="Ralph" />
                            </div>
                            <div className="card-name p-4 text-center">
                                <h3 className="font-semibold">Ralph</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="nfts" className="px-6 py-16">
                <div className="mx-auto max-w-[1200px]">
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">Wolf Gang NFT Collection</h2>
                        <p className="text-white/70 mt-2">1,000 on Solana • Utility • Community • Style</p>
                    </div>

                    <div className="relative rounded-2xl border border-white/10 bg-[var(--wg-night)]/90 overflow-hidden">
                        <div className="absolute inset-0 pointer-events-none" style={{
                            background: "radial-gradient(1200px 400px at 10% -10%, rgba(255,26,26,0.12), transparent), radial-gradient(1000px 400px at 110% 110%, rgba(21,162,255,0.10), transparent)"
                        }} />

                        <div className="relative p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col justify-center order-2 md:order-1">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 text-xs rounded-full border border-white/15 text-[var(--wg-moon-gray)]">Supply: 1,000</span>
                                    <span className="px-3 py-1 text-xs rounded-full border border-white/15 text-[var(--wg-moon-gray)]">Chain: Solana</span>
                                    <span className="px-3 py-1 text-xs rounded-full border border-white/15 text-[var(--wg-moon-gray)]">Mint: TBA</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                    Own the Night. Join the Pack.
                                </h3>
                                <p className="text-white/80 leading-relaxed">
                                    Meet Wolf Gang, a limited collection of 1,000 wolves minted on Solana. Each piece pairs neon swagger with real utility: discounts, early access, holder rooms, and community perks.
                                </p>
                                <ul className="mt-4 space-y-2 text-white/80">
                                    <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 rounded-full bg-[var(--wg-neon-red)]"></span><span>Holder Utilities: access, discounts, beta, drops</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 rounded-full bg-[var(--wg-cyber-blue)]"></span><span>Community: gated channels, votes, events</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 rounded-full bg-[var(--wg-blood-rose)]"></span><span>Art Direction: dark urban fantasy, neon edge</span></li>
                </ul>
                                <div className="mt-6 flex items-center gap-3">
                                    <a href="#" className="px-5 py-3 rounded-full bg-[var(--wg-neon-red)] text-black font-semibold hover:opacity-90 transition-opacity">Visit NFTs</a>
                                    <a href="#faq" className="px-5 py-3 rounded-full border border-white/20 hover:border-white/40 transition-colors">How it works</a>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10">
                                    <img
                                        src="https://res.cloudinary.com/dgxvuw8wd/image/upload/v1759660671/openart-video_9c22b562_1759660290498_dabvhf.webp"
                                        alt="Wolf Gang NFT preview"
                                        className="absolute inset-0 w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                                        <div className="flex items-center gap-2 text-xs">
                                            <span className="px-2 py-0.5 rounded-full bg-[var(--wg-neon-red)] text-black font-semibold">Featured</span>
                                            <span className="px-2 py-0.5 rounded-full border border-white/20 text-[var(--wg-moon-gray)]">1 of 1000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="faq" className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="rounded-xl border border-white/10 p-4 bg-black/40">
                            <h4 className="font-semibold mb-1 text-[var(--wg-cyber-blue)]">Mint Status</h4>
                            <p className="text-white/80 text-sm">Not live. Join the pack for updates.</p>
                        </div>
                        <div className="rounded-xl border border-white/10 p-4 bg-black/40">
                            <h4 className="font-semibold mb-1 text-[var(--wg-neon-red)]">Utilities</h4>
                            <p className="text-white/80 text-sm">Access, discounts, holder rooms, drops.</p>
                        </div>
                        <div className="rounded-xl border border-white/10 p-4 bg-black/40">
                            <h4 className="font-semibold mb-1 text-[var(--wg-blood-rose)]">Community</h4>
                            <p className="text-white/80 text-sm">Discord/Telegram — Join the Pack.</p>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default LandingPage