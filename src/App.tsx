import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  MoreVertical, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  UserCheck, 
  Key, 
  CalendarDays, 
  Building2, 
  Hotel, 
  Bus, 
  CreditCard, 
  PlaneLanding, 
  Utensils, 
  ShoppingBag, 
  Camera, 
  Phone, 
  Mail, 
  Play, 
  Clock, 
  CheckCircle2, 
  Download, 
  Home as HomeIcon, 
  Compass, 
  Users, 
  User,
  X,
  Info,
  Globe,
  ShieldCheck,
  Plus,
  Trash2,
  Pizza,
  FerrisWheel,
  ChevronRight
} from 'lucide-react';

// --- Types ---
type Screen = 'home' | 'tours' | 'detail' | 'explore' | 'success' | 'meetings' | 'registration' | 'contact';

// --- Components ---

const TopAppBar = ({ title, onBack, onMore }: { title: string; onBack?: () => void; onMore?: () => void }) => (
  <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 h-16 glass-nav border-b border-outline-variant/10">
    <div className="flex items-center gap-4">
      {onBack && (
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-surface-container-high/50 rounded-full transition-colors active:scale-95">
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>
      )}
      <h1 className="font-headline text-lg font-bold tracking-tight text-on-surface">{title}</h1>
    </div>
    <button onClick={onMore} className="p-2 -mr-2 hover:bg-surface-container-high/50 rounded-full transition-colors">
      <MoreVertical className="w-6 h-6 text-on-surface" />
    </button>
  </header>
);

// --- Screens ---

const HomeScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="pb-12">
    <TopAppBar title="APEC CHINA 2026" />
    
    {/* Hero */}
    <section className="relative h-[280px] w-full flex items-end px-6 pb-8 mb-6 overflow-hidden mt-16">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          src="https://ima.storage.shmedia.tech/20260403/AqTfZrgqlS/abaf129ebfa1369f83ca34b4bc983b05.png" 
          alt="APEC Banner"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="relative z-10 max-w-2xl">
        <span className="inline-block px-2 py-0.5 bg-primary text-white font-headline text-[10px] font-bold tracking-widest rounded-full mb-3">APEC CHINA 2026</span>
        <h2 className="font-headline font-extrabold text-2xl text-white leading-tight tracking-tight mb-3">The Second Senior Officials' Meeting (SOM2)</h2>
        <div className="flex flex-wrap gap-4 text-white/90 font-medium text-xs">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>May 11-19, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Shanghai, CHINA</span>
          </div>
        </div>
      </div>
    </section>

    <div className="px-6 space-y-8">
      {/* Meetings Bento */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-headline font-bold text-lg text-on-surface">Meetings</h3>
          <button onClick={() => onNavigate('meetings')} className="text-primary text-xs font-semibold flex items-center gap-1">More <ArrowRight className="w-3 h-3" /></button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: UserCheck, label: 'Registration', color: 'bg-primary/10 text-primary' },
            { icon: Key, label: 'Meeting Access', color: 'bg-secondary/10 text-secondary' },
            { icon: CalendarDays, label: 'Meetings Calendar', color: 'bg-tertiary/10 text-tertiary' },
            { icon: Building2, label: 'Venue Facilities', color: 'bg-on-surface-variant/10 text-on-surface-variant' },
          ].map((item, i) => (
            <div key={i} className="bg-surface-container-lowest p-3.5 rounded-xl shadow-[0_4px_12px_rgba(57,56,52,0.04)] flex flex-col gap-2 group hover:scale-[1.01] transition-transform cursor-pointer">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <p className="font-headline font-bold text-on-surface text-sm leading-tight">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Logistics */}
      <section className="bg-surface-container-low rounded-2xl p-3">
        <div className="flex items-center justify-between w-full mb-2 px-1">
          <h3 className="font-headline font-bold text-lg text-on-surface">Logistics</h3>
          <button className="text-primary text-xs font-semibold flex items-center gap-1">More <ArrowRight className="w-3 h-3" /></button>
        </div>
        <div className="grid grid-cols-1 gap-1.5">
          {[
            { icon: Hotel, label: 'Accommodation' },
            { icon: Bus, label: 'Transportation' },
            { icon: CreditCard, label: 'Payment' },
            { icon: PlaneLanding, label: 'Entry and Exit' },
          ].map((item, i) => (
            <div key={i} className="bg-surface-container-lowest px-3 py-1.5 rounded-lg flex items-center justify-between group cursor-pointer hover:bg-white transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-md bg-surface-container-high flex items-center justify-center text-on-surface">
                  <item.icon className="w-4 h-4" />
                </div>
                <span className="font-headline font-semibold text-sm">{item.label}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-outline-variant group-hover:text-primary transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* Visit Shanghai Preview */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-headline font-bold text-lg text-on-surface">Visit Shanghai</h3>
          <button onClick={() => onNavigate('tours')} className="text-primary text-xs font-semibold">Routes</button>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar snap-x">
          <div 
            onClick={() => onNavigate('detail')}
            className="min-w-[240px] bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm snap-center cursor-pointer"
          >
            <img 
              className="w-full h-32 object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6oxS0k_jlT_kLk2y-jGE6K_BNPinc4ZenZ5UOLbCKj52rVBgS-Xbb3aVq07A2-GxcvE1Eu2bP_sw1z_-YGxLrNhwcep_5Zy0Gx9WFVMqnDA5U650ALlcCTpAlQJnZRcC9ZU84RQZQCz05-jJp74YP32QiELzk-NNqDSKCtQRk-5aAfiS1ISOlT-xySDPsrrsZVhLZMHwjg6F97kLciz8ZLHbu67hK-kx4klfvoIaZbev42U0lHY7hNUAXNwKCmmw1O9Y6qyVyCuAm" 
              alt="AI Discovery"
              referrerPolicy="no-referrer"
            />
            <div className="p-4">
              <span className="text-[9px] uppercase font-bold tracking-widest text-primary bg-primary/10 px-1.5 py-0.5 rounded">Route 1</span>
              <h4 className="font-headline font-bold text-base mb-0.5">AI Discovery Route</h4>
              <p className="text-on-surface-variant text-xs line-clamp-1">Explore Zhangjiang Hi-Tech Park and more.</p>
            </div>
          </div>
          <div className="min-w-[240px] bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm snap-center">
            <img 
              className="w-full h-32 object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOvrez6uNORCb76GRLcJklR3Yy1gbgOgoIZdfwdSOzAgTE1MPT7gpRaGiHqdgjPy1BN_AunLNogsFZt3Gw9b50_rN9CtJbbPv3-U1TPXCnTznnupCPezHYULak9gFjfmVoVnNTy0-P_PjUglJMfVI6ZcPi6GBm-2po4by9QBCZqxxne7Z2P4FV2lccjhfDl6UQ0P3g5w19b4uR9BynjE554Ld8oAtQ5ZLHNTfVmxzcYTK2swkVSOe8o5a6RrGoHGaGsoYC5nPNTxnw" 
              alt="Heritage Walk"
              referrerPolicy="no-referrer"
            />
            <div className="p-4">
              <span className="text-[9px] uppercase font-bold tracking-widest text-secondary bg-secondary/10 px-1.5 py-0.5 rounded">Route 2</span>
              <h4 className="font-headline font-bold text-base mb-0.5">Heritage Walk Route</h4>
              <p className="text-on-surface-variant text-xs line-clamp-1">A journey through Yu Garden and Shikumen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Invitation */}
      <section className="relative rounded-2xl overflow-hidden shadow-xl border border-surface-container-highest aspect-video group cursor-pointer">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://ima.storage.shmedia.tech/20260403/6k4uPEjHm9/7b18d2386559d8437b6401e2ec8b13cf.png" 
            alt="Shanghai Invitation"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>
        <div className="relative z-10 h-full p-4 flex flex-col items-center justify-between text-center">
          <div className="flex flex-col items-center">
            <span className="text-white/70 font-headline font-semibold tracking-[0.25em] text-[8px] uppercase">Exclusive Preview</span>
            <h3 className="font-headline font-extrabold text-xl text-white leading-tight tracking-tight">An Invitation <span className="text-secondary-container italic">from Shanghai</span></h3>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-white/10 rounded-full blur-lg group-hover:bg-white/20 transition-all"></div>
            <button className="relative w-12 h-12 bg-white/10 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white/20 group-active:scale-95">
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            </button>
          </div>
          <div className="w-full">
            <p className="text-white/80 text-[10px] mb-2 font-medium">Experience the seamless blend of heritage and innovation.</p>
            <div className="flex items-center gap-3 opacity-60">
              <span className="text-white text-[7px] font-bold">00:45</span>
              <div className="flex-1 h-[1px] bg-white/20 rounded-full">
                <div className="h-full bg-secondary-container w-[25%] rounded-full"></div>
              </div>
              <span className="text-white text-[7px] font-bold">03:20</span>
            </div>
          </div>
        </div>
      </section>

      {/* Touring */}
      <section className="bg-[#F8F5F2] rounded-2xl p-4">
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="font-headline font-bold text-lg text-on-surface">Touring</h3>
          <button onClick={() => onNavigate('explore')} className="text-primary text-xs font-bold flex items-center gap-1">
            More <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          {[
            { icon: Utensils, label: 'Shanghai Taste' },
            { icon: Pizza, label: 'Dining Options' },
            { icon: ShoppingBag, label: 'Shopping' },
            { icon: FerrisWheel, label: 'Sightseeing' },
          ].map((item, i) => (
            <div 
              key={i} 
              onClick={() => onNavigate('explore')}
              className="bg-white p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col gap-3 group cursor-pointer active:scale-[0.98] transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#E8F0FE] flex items-center justify-center text-[#1A73E8]">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="font-headline font-bold text-on-surface text-sm leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="bg-white p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center gap-4 group cursor-pointer active:scale-[0.98] transition-all">
          <div className="w-10 h-10 rounded-lg bg-[#E8F0FE] flex items-center justify-center text-[#1A73E8]">
            <Phone className="w-5 h-5" />
          </div>
          <span className="font-headline font-bold text-on-surface text-sm">Service Hotline</span>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="flex items-center justify-between w-full mb-3">
          <h3 className="font-headline font-bold text-lg text-on-surface">Contact</h3>
          <button onClick={() => onNavigate('contact')} className="text-primary text-xs font-semibold flex items-center gap-1">More <ArrowRight className="w-3 h-3" /></button>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center gap-3 bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant/10 shadow-sm">
            <Phone className="w-6 h-6 text-primary" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">Hotline</span>
              <span className="text-sm font-bold font-headline text-on-surface">+86 21 XXXX XXXX</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant/10 shadow-sm">
            <Mail className="w-6 h-6 text-primary" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">Email</span>
              <span className="text-sm font-bold font-headline text-on-surface">info@apec2026.org.cn</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

const MeetingsScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [activeTab, setActiveTab] = useState('Registration');

  return (
    <div className="pb-12 pt-16 bg-surface">
      <TopAppBar title="Meetings" onBack={() => onNavigate('home')} />
      
      {/* Tabs */}
      <div className="sticky top-16 z-40 bg-white border-b border-outline-variant/10">
        <div className="flex overflow-x-auto hide-scrollbar px-6">
          {['Registration', 'Meeting Access', 'Meetings Calendar'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-4 text-sm font-bold whitespace-nowrap transition-all relative ${activeTab === tab ? 'text-on-surface' : 'text-on-surface-variant'}`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="activeMeetingTab" className="absolute bottom-0 left-4 right-4 h-0.5 bg-on-surface" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-8 space-y-8">
        {activeTab === 'Registration' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <header>
              <span className="text-primary text-[10px] font-black tracking-[0.2em] uppercase block mb-3">APEC 2026 OFFICIAL GUIDE</span>
              <h2 className="font-headline font-extrabold text-3xl text-on-surface tracking-tight leading-tight mb-4">Summit Registration & Participation</h2>
              <p className="text-on-surface-variant text-base leading-relaxed">The Global Curatorial ensures a streamlined process for delegates, media, and honored guests attending the upcoming sessions.</p>
            </header>

            <section className="space-y-4">
              <h3 className="font-headline font-bold text-xl text-on-surface">会议注册与认证</h3>
              
              <div className="bg-white rounded-xl p-6 border border-outline-variant/10 shadow-sm space-y-6">
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  APEC 2026 registration is strictly managed via the official portal. All delegates must be authorized through their respective economy's <span className="font-bold text-on-surface">Representative Authentication Officer (DAO)</span>.
                </p>
                
                <div className="bg-surface-container-low rounded-xl p-5 flex gap-4">
                  <div className="text-primary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm text-on-surface mb-1">DAO Authentication Required</h4>
                    <p className="text-on-surface-variant text-xs leading-relaxed">Your economy's designated officer must verify all representatives before credentials can be issued.</p>
                  </div>
                </div>
              </div>

              <div className="bg-on-surface rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="text-white">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline font-bold text-sm text-white mb-1">Registration Portal</h4>
                    <div className="flex items-center justify-between">
                      <a href="#" className="text-white/80 text-xs underline decoration-white/30 truncate">delegate.registration.apec2026.cn</a>
                      <ArrowRight className="w-4 h-4 text-white/60" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-outline-variant/10 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="text-on-surface-variant">
                    <CalendarDays className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black tracking-widest text-on-surface-variant uppercase block mb-0.5">DEADLINE</span>
                    <h4 className="font-headline font-bold text-xl text-on-surface mb-1">March 31, 2026</h4>
                    <p className="text-on-surface-variant text-xs">Finalized cutoff for all logistical coordination.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="font-headline font-bold text-xl text-on-surface">APEC 非成员参与及嘉宾注册</h3>
              
              <div className="bg-white rounded-xl border border-outline-variant/10 shadow-sm divide-y divide-outline-variant/10">
                <div className="p-5 flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-md border border-outline-variant/20 flex items-center justify-center text-xs font-bold text-on-surface-variant bg-surface-container-low">1</div>
                  <div>
                    <h4 className="font-headline font-bold text-sm text-on-surface">Invited Guests</h4>
                    <p className="text-on-surface-variant text-xs mt-0.5">Personalized secure links sent via email.</p>
                  </div>
                </div>
                <div className="p-5 flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-md border border-outline-variant/20 flex items-center justify-center text-xs font-bold text-on-surface-variant bg-surface-container-low">2</div>
                  <div>
                    <h4 className="font-headline font-bold text-sm text-on-surface">Speaker Coordination</h4>
                    <p className="text-on-surface-variant text-xs mt-0.5">Specialized badge tiers managed via Secretariat.</p>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {activeTab !== 'Registration' && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-on-surface-variant opacity-20" />
            </div>
            <h3 className="font-headline font-bold text-on-surface">Content Coming Soon</h3>
            <p className="text-on-surface-variant text-sm mt-1">This section is currently being updated for SOM2.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ToursScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [activeTab, setActiveTab] = useState('MAY 12');

  return (
    <div className="pb-12 pt-16">
      <TopAppBar title="Visit Shanghai" onBack={() => onNavigate('home')} />
      
      {/* Date Tabs */}
      <div className="sticky top-16 z-40 bg-surface/95 backdrop-blur-md px-6 py-4 mb-8">
        <div className="flex p-1 bg-surface-container-highest rounded-full max-w-md mx-auto">
          {['MAY 12', 'MAY 13', 'MAY 14'].map((date) => (
            <button 
              key={date}
              onClick={() => setActiveTab(date)}
              className={`flex-1 py-2 px-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 ${activeTab === date ? 'bg-primary text-white shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {date}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 space-y-6">
        {/* Route Card 1 */}
        <div 
          onClick={() => onNavigate('detail')}
          className="group relative overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/10 cursor-pointer"
        >
          <div className="aspect-[16/10] overflow-hidden">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJa9H4mWeiWoyTLfORh1lzP6Ju0jVm-GP01pfymyBE3OxsOR5ECqCDNDHgp31A-ZFGMg3jPMTXAD9pn-yljJjVWMBhc3zPPqeRkNr2lyCVX-B8Xg4RrwFeSYhTd1y5R31RWeMCCaBJXJ00SoctncbDOcBzuvvVdt46YjbiJlh-0dV-e9MYteDc7GOHwASW9QClDmKG5kRAnXrbKkBXxJW7iQUMiaPoNz4aMAVfKav1tTP-kEfDuLKz7GrdXT6anv_aNrNWAi8C6Xj1" 
              alt="Future Tech Tour"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-4 left-4">
            <span className="bg-primary/90 text-white px-2.5 py-1 rounded-md font-label text-[10px] font-black tracking-widest uppercase shadow-md">Available</span>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-headline text-2xl font-bold text-on-surface">Future Tech Tour</h3>
              <div className="flex items-center text-primary gap-1">
                <Clock className="w-3 h-3" />
                <span className="text-[10px] font-bold uppercase tracking-wider">09:00 - 13:00</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Explore the Zhangjiang Hi-Tech Park and witness the next generation of AI and biotech innovations shaping the world.</p>
            <button className="w-full bg-primary text-white py-3.5 rounded-xl font-label text-xs font-bold tracking-widest uppercase shadow-lg shadow-primary/20 active:scale-[0.98] transition-all">Book Now</button>
          </div>
        </div>

        {/* Route Card 2 */}
        <div className="group relative overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/10 opacity-80">
          <div className="aspect-[16/10] overflow-hidden">
            <img 
              className="w-full h-full object-cover grayscale-[0.3]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2g06NhmX29oGc5R2P8um-OeKWKeYpI9K2V0vbZh4DvRXorlGSmL8KtxPuTHz30I-i1h4DSxFsWz2kNFPvvFE1OFYsCb-_lQ5MN3d6DEG1qHFbVZVONWz4iBPGKvUdTMtSnA6GKiGm3mZ7SrsKF2EAPnnVVYmJnoM_wX2mlRtRWDRz35DxNiTDhVenuXCZdk7W2GvWzpdWRxjVYbD1_nGwUJ4aJpW67Oo6GMtp3gMSd5w1ZM7Lt5Qyutt5U6N1GnZXCCxoWYPnogPn" 
              alt="Heritage Walk"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-4 left-4">
            <span className="bg-on-surface-variant text-white px-2.5 py-1 rounded-md font-label text-[10px] font-black tracking-widest uppercase shadow-md">Full</span>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-headline text-2xl font-bold text-on-surface">Heritage Walk</h3>
              <div className="flex items-center text-on-surface-variant gap-1">
                <Clock className="w-3 h-3" />
                <span className="text-[10px] font-bold uppercase tracking-wider">14:00 - 17:30</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">A curated walk through the Old City and Yu Garden's Ming-era architecture, focusing on preservation and history.</p>
            <button className="w-full bg-surface-container-high text-on-surface-variant py-3.5 rounded-xl font-label text-xs font-bold tracking-widest uppercase cursor-not-allowed">Fully Booked</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="pb-32">
    <TopAppBar title="Route Detail" onBack={() => onNavigate('tours')} />
    
    <div className="relative w-full h-[397px] overflow-hidden mt-16">
      <img 
        className="w-full h-full object-cover" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHfdXjTWz0hKhNGLRe52NJmvSnd7RqUoUkNkImmc_yQ71KKPWsp7LtpUlc7G3K8uFQLkmfiduB-ckpeeX9ILrZmjUp6fZAEy38sbQxGlsN-zZNuIzM_19JFxGUiPAtosVvdf3DlFgfgotoIYw9MI5x8Tt_B7zXT3FWju-ob93XmSw4_j7rI2SsY0AAphwX0YPl1h7PSKfZWFZOxkAuFdpPa468lmzPynb8tlVVnfHjaC1baVG-um7yxmjs9TbtPIucvbqeEcpa7G7u" 
        alt="Shanghai Tech"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/20"></div>
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <span className="inline-block bg-primary text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full mb-3 shadow-lg">CURATED TOUR</span>
        <h1 className="font-headline font-extrabold text-4xl text-on-surface tracking-tighter leading-[1.1]">Route 1: Future Tech Tour</h1>
      </div>
    </div>

    <div className="px-6 space-y-10 mt-6">
      {/* Overview */}
      <section className="bg-surface-container-low rounded-xl p-8 shadow-sm">
        <div className="grid grid-cols-2 gap-8">
          {[
            { label: 'DURATION', value: '4-hour tour', color: 'text-primary' },
            { label: 'SCHEDULE', value: '09:00 - 13:00', color: 'text-on-surface' },
            { label: 'LANGUAGE', value: 'English / CN', color: 'text-on-surface' },
            { label: 'TRANSPORT', value: 'Private Shuttle', color: 'text-on-surface' },
          ].map((item, i) => (
            <div key={i} className="space-y-1">
              <span className="text-on-surface-variant text-[11px] font-medium tracking-wide font-label">{item.label}</span>
              <p className={`font-headline font-bold text-lg ${item.color}`}>{item.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-outline-variant/20">
          <h2 className="font-headline font-bold text-2xl mb-4 tracking-tight">Route Overview</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Explore the pulse of China's technological evolution. This exclusive journey takes you through the heart of Shanghai's most advanced innovation hubs, offering a rare glimpse into the future of global AI, robotics, and integrated circuits.
          </p>
        </div>
      </section>

      {/* Itinerary */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-headline font-bold text-2xl tracking-tight">Itinerary</h2>
          <span className="text-on-surface-variant font-label text-sm">2 Key Locations</span>
        </div>
        <div className="space-y-8 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[2px] before:bg-surface-container-high">
          {[
            {
              num: '01',
              time: '09:00 — 10:45',
              title: 'Zhangjiang Hi-Tech Park',
              desc: "Known as China's Silicon Valley, this visit focuses on the integrated circuit design hub and the latest in semiconductor manufacturing facilities.",
              tags: ['TECH HUB', 'GUIDED WALK'],
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOVpSvqM3XxgIX1WaBJCq8mxLpOk0Fyyz2wnO29scRVCVxZpSRKRVEXoxym9uyXE1VzsyhNRLW9wDJ7mjw5ZsjdbS6gDVkS9JSNAxCnnPYS3N8mX9jcegb3g1J5p-zhK87Ud3t6Ei_IElzXIZYEQoPRcu-hF7y3DvlCifp49hjCYBELFMkxEkrF6VxGGXMjOaR7PnWah_93VS2HZzHm079stau7il5lM-2pnbY-KHZ6QSmGruPvnrEaq2GINLGaHznITqfPZAw1E_I"
            },
            {
              num: '02',
              time: '11:15 — 13:00',
              title: 'AI Innovation Center',
              desc: "An immersive experience demonstrating real-world applications of Large Language Models and computer vision within urban infrastructure.",
              tags: ['AI RESEARCH', 'DEMO DAY'],
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-VJ2-7IHaFI4M1x-ExeP0h6xafbtzAWt-FATLaibEFljxmt9_KBs3KRSAp3pR-YpzwTaNY1UjVI_dUDBq4GTrefpStkH1S8YFsSdQ-y3A8bdXNNaK3c-9XnoVm1uGT2vN8zPEYUIGYXFczc_AKrPApSdFfbmHv3YAjILmXIx7ku6PVa9pOTHSFLNjoZGt7a3QaSwNRE8bIc6BNFPTbO2zy4KrXjmYgN66sgs2IEpDvE7ESypA4M4L7lfABzzMzZ1z9k9nFzbQJ8YE"
            }
          ].map((stop, i) => (
            <div key={i} className="relative pl-12 group">
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-surface-container-lowest border-4 border-surface shadow-sm flex items-center justify-center z-10">
                <span className="text-primary font-headline font-bold text-sm">{stop.num}</span>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <span className="text-secondary font-label text-xs font-bold tracking-widest">{stop.time}</span>
                    <h3 className="font-headline font-bold text-xl mt-1 mb-2">{stop.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{stop.desc}</p>
                    <div className="flex gap-2">
                      {stop.tags.map(tag => (
                        <span key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden bg-surface-container">
                    <img className="w-full h-full object-cover" src={stop.img} alt={stop.title} referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meeting Point */}
      <section className="space-y-4">
        <h2 className="font-headline font-bold text-2xl tracking-tight">Meeting Point</h2>
        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm">
          <div className="h-64 bg-surface-container relative">
            <img 
              className="w-full h-full object-cover opacity-50 grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ7oIYJAPzRdAUqT5GDbTaXUaHGE3zU15u7xsUMjFrOBd_X-T0NcjN-BLQM9ELgreo-2cO0TcBXw1pHtKXfLwyqAZw8eACy5aQZAmPyWH2hvJJn_3RBP4_sMTVpTcDSw1TiaDL19focXRG6kB2nWEuIbAc5m9jGE8SFRdN134lsZ32j42O0gk7Ww1u32_lgbrdjmVrQMBerwVwxNzTQkMI4s2SfnwKX8VHldIRYlPzgfdS0-tFshd4zc8XDFiQjIywvJaWf5WULE_1" 
              alt="Map"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <MapPin className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="p-6 flex items-start gap-4">
            <div className="bg-surface-container-high p-3 rounded-xl">
              <Bus className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-headline font-bold text-lg">Pudong Financial Center, Lobby A</h4>
              <p className="text-on-surface-variant text-sm">No. 1200 Century Avenue, Pudong New Area, Shanghai</p>
              <p className="text-secondary text-xs font-bold mt-2 tracking-wide font-label uppercase">SHUTTLE DEPARTS PROMPTLY AT 08:45</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* Sticky Register */}
    <div className="fixed bottom-0 left-0 w-full p-6 glass-nav z-50 border-t border-outline-variant/10">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-6">
        <div className="hidden md:block">
          <p className="text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">Price per person</p>
          <p className="text-2xl font-headline font-extrabold text-on-surface">¥450.00</p>
        </div>
        <button 
          onClick={() => onNavigate('registration')}
          className="flex-1 md:flex-none md:w-64 bg-gradient-to-r from-primary to-primary-container text-white font-label font-bold text-sm tracking-[0.05em] uppercase py-4 rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          Register Now
        </button>
      </div>
    </div>
  </div>
);

const ExploreScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [activeTab, setActiveTab] = useState('Shanghai Taste');

  const tasteItems = [
    {
      title: 'Nanxiang Steamed Buns',
      cn: '南翔小笼',
      desc: 'A legendary staple known for its paper-thin skin and incredibly rich, flavorful soup. Each bun is meticulously pleated by hand, holding a delicate pork filling that releases a savory broth upon the first bite.',
      tags: ['HERITAGE', 'ICONIC'],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMWqwO8pqG6ienX_whRJGLjgAyST9WjFcj_4UAg6N9SG65KEPz1ZzUzeRYse9tocKvXjG7SDxb5ccfnxWpXWzfuK-FYTbds6PGuIiT7ZiulbOEpHy5Y08c3IiADZpgJBQi8WZFHMCt76ItE963yYu8vD8xdlDWXFqrbTLG-RGaGh3RINjD4Sxcp8IxPgVvCKFRL191-Zj4TQbKAkN-A6a6Ht2GsV0HaoaxIBTrB_b9iqHf_hG6Xobuq0D_9Xcbzb-Qjv2BCZAt4Vug"
    },
    {
      title: 'Yan Du Xian',
      cn: '腌笃鲜',
      desc: 'The ultimate spring comfort food. This slow-simmered soup features fresh winter bamboo shoots, salt-cured pork, and fresh streaky pork. The resulting milky-white broth is a masterclass in umami balance.',
      tags: [],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBg9-Xioxzg3KxD5_st-98B9HCCBTBnRF9iODA6Um-XUQxVD8U15WJRxUdVo-1Lm-DC5PTdRBae14uRvc6Xfo4SefjArThZfYTdHjGBWSGKkCxQM8hdabtsZu6MfBUIzKhUq_SFIyJLxAmlDjveVys9-rYToGi-tbiP3bAqHYMtlAHr0ddcz9LmVaKMNWVg-kxPKER9hV0vsbA2jpk1MDTL7owc1Eu8n_Itp0WBaJ77TH80xjDXyYXO1bmc8rZGK-a8fmPzpXAUR2zV"
    },
    {
      title: 'Eight-Treasure Duck',
      cn: '八宝鸭',
      desc: 'A festive masterpiece where a whole duck is deboned and stuffed with eight premium "treasures"—including glutinous rice, mushrooms, chestnuts, and bamboo shoots—then steamed until tender and succulent.',
      tags: [],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH0W_V_64w4M2W4A8m_O_X0R3Z_4h8p9j_p9R_R_Q_H_G_F_E_D_C_B_A"
    },
    {
      title: 'Crystal Shrimp',
      cn: '水晶虾仁',
      desc: 'Renowned for its pure, clean taste and bouncy texture. These fresh-water shrimp are shelled and stir-fried with minimal seasoning to highlight their natural sweetness and translucent, crystal-like appearance.',
      tags: [],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ7oIYJAPzRdAUqT5GDbTaXUaHGE3zU15u7xsUMjFrOBd_X-T0NcjN-BLQM9ELgreo-2cO0TcBXw1pHtKXfLwyqAZw8eACy5aQZAmPyWH2hvJJn_3RBP4_sMTVpTcDSw1TiaDL19focXRG6kB2nWEuIbAc5m9jGE8SFRdN134lsZ32j42O0gk7Ww1u32_lgbrdjmVrQMBerwVwxNzTQkMI4s2SfnwKX8VHldIRYlPzgfdS0-tFshd4zc8XDFiQjIywvJaWf5WULE_1"
    }
  ];

  return (
    <div className="pb-12 pt-16 bg-[#FDFBF7] min-h-screen">
      <TopAppBar title="Touring" onBack={() => onNavigate('home')} />
      
      {/* Tabs */}
      <div className="sticky top-16 z-30 bg-black border-b border-white/10">
        <nav className="flex items-center justify-between px-4">
          {[
            { icon: Utensils, label: 'Shanghai Taste' },
            { icon: Pizza, label: 'Dining Options' },
            { icon: ShoppingBag, label: 'Shopping' },
            { icon: FerrisWheel, label: 'Attractions' },
          ].map((tab) => (
            <button 
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`flex flex-col items-center justify-center py-4 px-2 transition-all relative ${activeTab === tab.label ? 'opacity-100' : 'opacity-50'}`}
            >
              <tab.icon className="w-5 h-5 mb-1 text-white" />
              <span className="whitespace-nowrap font-headline font-bold text-[10px] text-white tracking-tight">{tab.label}</span>
              {activeTab === tab.label && (
                <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-2 right-2 h-1 bg-white rounded-t-full" />
              )}
            </button>
          ))}
        </nav>
      </div>

      <main className="max-w-screen-md mx-auto px-6 pt-8 space-y-12">
        {activeTab === 'Shanghai Taste' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <section>
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl group">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACs_uxu7VOqOtRYaj-EvpTIgBDg570-hTwY3yIub3197BgPc17Z76A3WYvz1enXSQM4Zd0j0CBBxC5filBL9AeIzcRBIqNkLTXN0iyZShkVsIlkdhPk0-JRUYGnTtuY0wx9h4qTRHznaqSQ_Y_fX65cA6_6JV-uoa_EMoUSCfrGrKtQc3I8EfcsRfepskcj5evuWzG0cwhbMh4otNo3xoxgEsEjF6Bnpq8RZDGcYjAQwTqbfkwDekIvBf6mGwHbtvMG65prWMwrMEx" 
                  alt="Soup Dumpling"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <span className="text-primary-container bg-primary/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] w-fit mb-3 border border-white/20">Editor's Pick</span>
                  <h2 className="font-headline font-extrabold text-4xl text-white tracking-tight leading-tight">The Art of the Soup Dumpling</h2>
                </div>
              </div>
              <p className="mt-8 text-on-surface-variant leading-relaxed text-xl font-light italic text-center px-4">
                “Shanghai's culinary soul is found in the delicate balance of sweetness, freshness, and precise craftsmanship.”
              </p>
            </section>

            {/* List Items */}
            <div className="space-y-16">
              {tasteItems.map((item, i) => (
                <article key={i} className="space-y-6">
                  <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg relative">
                    <img className="w-full h-full object-cover" src={item.img} alt={item.title} referrerPolicy="no-referrer" />
                    {item.title === 'Nanxiang Steamed Buns' && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white p-2 rounded-lg shadow-lg">
                        <span className="text-lg font-bold">皮</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="font-headline font-bold text-2xl text-on-surface tracking-tight">{item.title}</h3>
                      <span className="text-secondary font-headline font-bold text-xs px-2 py-1 bg-secondary-container/30 rounded-md border border-secondary/10">{item.cn}</span>
                    </div>
                    <p className="text-on-surface-variant font-body leading-relaxed text-base">{item.desc}</p>
                    {item.tags.length > 0 && (
                      <div className="flex gap-2 pt-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="bg-surface-container-high text-on-surface-variant text-[9px] uppercase font-black tracking-widest px-2.5 py-1.5 rounded-md border border-outline-variant/30">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Special Card: Chongming Rice Cake */}
            <section className="bg-white rounded-[40px] p-8 shadow-sm border border-outline-variant/10 space-y-6">
              <div className="aspect-square w-full rounded-3xl overflow-hidden bg-surface-container-low">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6oxS0k_jlT_kLk2y-jGE6K_BNPinc4ZenZ5UOLbCKj52rVBgS-Xbb3aVq07A2-GxcvE1Eu2bP_sw1z_-YGxLrNhwcep_5Zy0Gx9WFVMqnDA5U650ALlcCTpAlQJnZRcC9ZU84RQZQCz05-jJp74YP32QiELzk-NNqDSKCtQRk-5aAfiS1ISOlT-xySDPsrrsZVhLZMHwjg6F97kLciz8ZLHbu67hK-kx4klfvoIaZbev42U0lHY7hNUAXNwKCmmw1O9Y6qyVyCuAm" 
                  alt="Chongming Rice Cake"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <span className="inline-block bg-[#99F6E4] text-[#0D9488] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Traditional Dessert</span>
                <h3 className="font-headline font-bold text-3xl text-on-surface tracking-tight">Chongming Rice Cake (崇明糕)</h3>
                <p className="text-on-surface-variant leading-relaxed text-base">
                  A beloved festive treat from Chongming Island. This thick, steamed cake is made from premium glutinous rice flour, studded with jujubes, walnuts, and raisins. It offers a perfect chewy texture with a subtle, aromatic sweetness.
                </p>
                <button className="text-primary font-bold text-xs flex items-center gap-2 tracking-widest uppercase pt-2">
                  Discover History <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
};

const RegistrationScreen = ({ onNavigate, onSuccess }: { onNavigate: (s: Screen) => void; onSuccess: () => void }) => {
  const [persons, setPersons] = useState([{ id: 1 }]);

  const addPerson = () => {
    setPersons([...persons, { id: Date.now() }]);
  };

  const removePerson = (id: number) => {
    if (persons.length > 1) {
      setPersons(persons.filter(p => p.id !== id));
    }
  };

  return (
    <div className="pb-12 pt-16 bg-surface min-h-screen">
      <TopAppBar title="Tour Registration" onBack={() => onNavigate('detail')} />
      
      <div className="px-6 py-8 max-w-md mx-auto space-y-8">
        <header>
          <h2 className="text-2xl font-headline font-bold tracking-tight text-on-surface mb-2">Tour Registration</h2>
          <p className="text-on-surface-variant text-sm">Secure your spot for the Future Tech Tour. Spaces are limited.</p>
        </header>

        <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onSuccess(); }}>
          {/* Primary Registrant */}
          <section className="space-y-4">
            <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.2em]">Primary Registrant</h3>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold text-on-surface-variant tracking-wider uppercase ml-1">Full Name</label>
                <input 
                  required
                  className="w-full bg-white border border-outline-variant/20 rounded-xl px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none shadow-sm" 
                  placeholder="E.g. Julian Vane" 
                  type="text"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold text-on-surface-variant tracking-wider uppercase ml-1">Email Address</label>
                <input 
                  required
                  className="w-full bg-white border border-outline-variant/20 rounded-xl px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none shadow-sm" 
                  placeholder="name@curatorial.com" 
                  type="email"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold text-on-surface-variant tracking-wider uppercase ml-1">Verification Code</label>
                <div className="relative">
                  <input 
                    required
                    className="w-full bg-white border border-outline-variant/20 rounded-xl px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none shadow-sm" 
                    placeholder="Enter code" 
                    type="text"
                  />
                  <Info className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 w-5 h-5" />
                </div>
              </div>
            </div>
          </section>

          {/* Accompanying Persons */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-headline font-bold text-base text-on-surface">Accompanying Persons</h3>
              <button 
                type="button"
                onClick={addPerson}
                className="text-primary text-sm font-bold flex items-center gap-1 hover:opacity-80 transition-opacity"
              >
                <Plus className="w-4 h-4" /> Add Person
              </button>
            </div>

            <div className="space-y-8">
              {persons.map((person, index) => (
                <div key={person.id} className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-on-surface">Person {index + 1}</span>
                    {persons.length > 1 && (
                      <button 
                        type="button"
                        onClick={() => removePerson(person.id)}
                        className="p-1 text-error hover:bg-error/10 rounded-md transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="space-y-3">
                    <input 
                      required
                      className="w-full bg-white border border-outline-variant/20 rounded-xl px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none shadow-sm" 
                      placeholder="Full Name" 
                      type="text"
                    />
                    <input 
                      required
                      className="w-full bg-white border border-outline-variant/20 rounded-xl px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none shadow-sm" 
                      placeholder="Economy/Organization" 
                      type="text"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="pt-4">
            <button 
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl font-label font-bold tracking-[0.05em] uppercase text-sm shadow-lg shadow-primary/20 hover:brightness-110 transition-all active:scale-95"
            >
              Submit
            </button>
          </div>
        </form>
        
        <p className="text-center text-[10px] text-on-surface-variant/60 leading-relaxed px-4">
          By registering, you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

const ContactScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="pb-12 pt-16 bg-surface min-h-screen">
    <TopAppBar title="Contact Us" onBack={() => onNavigate('home')} />
    
    <div className="px-6 py-8 max-w-md mx-auto space-y-8">
      <header>
        <h2 className="text-2xl font-headline font-bold tracking-tight text-on-surface mb-2">Contact Us</h2>
        <p className="text-on-surface-variant text-sm">We are here to help you with any questions about APEC CHINA 2026.</p>
      </header>

      <div className="space-y-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Hotline</p>
              <p className="text-lg font-bold text-on-surface">+86 21 XXXX XXXX</p>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">Available 24/7 for urgent inquiries and general assistance.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Email</p>
              <p className="text-lg font-bold text-on-surface">info@apec2026.org.cn</p>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">We typically respond within 24 hours on business days.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Office</p>
              <p className="text-lg font-bold text-on-surface">Shanghai, China</p>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">APEC CHINA 2026 Organizing Committee Secretariat.</p>
        </div>
      </div>
    </div>
  </div>
);

const SuccessScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
    <TopAppBar title="The Global Curatorial" onBack={() => onNavigate('home')} />
    
    <div className="mb-8 flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <CheckCircle2 className="w-12 h-12 text-primary" />
      </div>
      <h1 className="text-3xl font-headline font-extrabold tracking-tight text-on-surface text-center">Registration Successful!</h1>
      <p className="text-on-surface-variant text-center mt-2 font-body text-sm">Your spot is secured for the selected tour.</p>
    </div>

    <div className="w-full max-w-md bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden border border-outline-variant/10">
      <div className="h-32 w-full relative">
        <img 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKG09hC3G9C6lxAjd94k0FXpHpYfjxxctyWfom2XqZkn0MkpyFJjemr7jNZSRDIHUi5jPJVcTsODzxQhKPMecvHJfZ7G4y3faKTPbJbgWcqEecl9lTMarSURSaHbW3KCWFre0LVbB4Ch9weGamJtJL0qIHEjFLL9CBJL30ELFzC3mzQmznSB3hKTjiycGAfBQO9eLT3_5qsGGTwXHtPyD3EiRBy8YEcsEnrK8avDW7j5xHiCwv84_TQ0W5kpQx87yRbgu0Qy7QPEOx" 
          alt="Tech"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
      </div>
      <div className="px-6 pb-8 -mt-4 relative">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase rounded-full mb-2">Confirmed</span>
        <h2 className="text-xl font-headline font-bold text-on-surface mb-6">Future Tech Tour</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-surface-container-low">
            <p className="text-[10px] font-label font-semibold uppercase tracking-wider text-on-surface-variant mb-1">Date</p>
            <p className="text-sm font-medium text-on-surface">May 12, 2026</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-low">
            <p className="text-[10px] font-label font-semibold uppercase tracking-wider text-on-surface-variant mb-1">Time</p>
            <p className="text-sm font-medium text-on-surface">09:00 AM</p>
          </div>
          <div className="col-span-2 p-4 rounded-xl bg-surface-container-low flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-[10px] font-label font-semibold uppercase tracking-wider text-on-surface-variant mb-1">Meeting Point</p>
              <p className="text-sm font-medium text-on-surface leading-snug">Main Atrium, Global Tech Plaza Level 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full max-w-md mt-10 space-y-4">
      <button className="w-full h-14 bg-gradient-to-r from-primary to-primary-container text-white rounded-full flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all active:scale-95">
        <Download className="w-5 h-5" />
        <span className="font-label font-bold text-sm tracking-widest uppercase">Download Card</span>
      </button>
      <button 
        onClick={() => onNavigate('home')}
        className="w-full h-14 border border-outline-variant/30 rounded-full flex items-center justify-center hover:bg-surface-container-high transition-all active:scale-95"
      >
        <span className="text-on-surface-variant font-label font-bold text-sm tracking-widest uppercase">Back to Home</span>
      </button>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen]);

  const handleNavigate = (s: Screen) => setScreen(s);
  const handleSuccess = () => {
    setScreen('success');
  };

  return (
    <div className="min-h-screen bg-surface">
      <AnimatePresence mode="wait">
        {screen === 'home' && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <HomeScreen onNavigate={handleNavigate} />
          </motion.div>
        )}
        {screen === 'tours' && (
          <motion.div key="tours" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ToursScreen onNavigate={handleNavigate} />
          </motion.div>
        )}
        {screen === 'detail' && (
          <motion.div key="detail" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <DetailScreen onNavigate={handleNavigate} />
          </motion.div>
        )}
        {screen === 'explore' && (
          <motion.div key="explore" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ExploreScreen onNavigate={handleNavigate} />
          </motion.div>
        )}
        {screen === 'success' && (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
            <SuccessScreen onNavigate={handleNavigate} />
          </motion.div>
        )}
        {screen === 'meetings' && (
          <motion.div key="meetings" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <MeetingsScreen onNavigate={handleNavigate} />
          </motion.div>
        )}
        {screen === 'registration' && (
          <motion.div key="registration" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <RegistrationScreen onNavigate={handleNavigate} onSuccess={handleSuccess} />
          </motion.div>
        )}
        {screen === 'contact' && (
          <motion.div key="contact" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <ContactScreen onNavigate={handleNavigate} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
