'use client';

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-5xl mx-auto px-6 py-24 relative z-10 border-t border-zinc-200 dark:border-zinc-900/50 transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-16 justify-between">
        
        {/* Left Side: Text and Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-400 rounded-full"></span>
              <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs tracking-widest uppercase">Connect</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
              Let's Build Something.
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-sm transition-colors duration-300">
            Whether you have a question about my projects, a role to discuss, or just want to say hi, my inbox is always open.
          </p>
          <div className="pt-8 space-y-6">
            <div>
              <p className="text-zinc-500 dark:text-zinc-500 mb-1 uppercase tracking-wider text-[9px] font-mono">Email</p>
              <a href="mailto:kalaivanankk2005@gmail.com" className="text-zinc-900 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm font-mono">
                kalaivanankk2005@gmail.com
              </a>
            </div>
            <div>
              <p className="text-zinc-500 dark:text-zinc-500 mb-1 uppercase tracking-wider text-[9px] font-mono">Location</p>
              <p className="text-zinc-900 dark:text-zinc-300 text-sm font-mono transition-colors">Bengaluru, Karnataka</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:w-1/2">
          <form action="https://api.web3forms.com/submit" method="POST" className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 p-8 rounded-xl space-y-6 shadow-sm dark:shadow-none transition-colors duration-300">
            {/* Make sure your access key is correct below! */}
            <input type="hidden" name="access_key" value="98f108d1-d286-4f4f-b3a1-944a95689728" />
            
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 focus:border-cyan-500 rounded px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 outline-none transition-colors" 
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 focus:border-cyan-500 rounded px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 outline-none transition-colors" 
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={4} 
                className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 focus:border-cyan-500 rounded px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-semibold py-3 rounded text-sm hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-colors mt-2">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}