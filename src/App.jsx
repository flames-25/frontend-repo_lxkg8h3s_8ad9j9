import { useState } from 'react'
import {
  CheckCircle2,
  QrCode,
  LogIn,
  Search,
  Phone,
  Heart,
  Gift,
  BookOpen,
  Ring,
  Images,
  Camera,
  MessageCircle,
  Video,
  X,
} from 'lucide-react'

function Modal({ title, open, onClose, children, full = false }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
        onClick={onClose}
      />
      <div
        className={
          "relative bg-white/95 border border-white/60 shadow-2xl rounded-2xl overflow-hidden " +
          (full
            ? 'w-[92vw] h-[88vh]'
            : 'w-[92vw] max-w-[520px] max-h-[88vh]')
        }
      >
        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-rose-50 to-violet-50 border-b">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-5 overflow-y-auto h-full">{children}</div>
      </div>
    </div>
  )
}

function Shortcut({ icon: Icon, label, onClick, accent = 'rose' }) {
  const color =
    accent === 'rose'
      ? 'text-rose-600'
      : accent === 'violet'
      ? 'text-violet-600'
      : 'text-emerald-600'
  return (
    <button
      onClick={onClick}
      className="flex-1 flex flex-col items-center justify-center gap-2 py-3 select-none focus:outline-none"
    >
      <Icon className={`h-8 w-8 ${color}`} />
      <span className="text-sm font-medium text-gray-800">{label}</span>
    </button>
  )
}

export default function App() {
  const [openModal, setOpenModal] = useState(null)

  const open = (key) => setOpenModal(key)
  const close = () => setOpenModal(null)

  return (
    <div className="h-screen w-screen overflow-hidden bg-[radial-gradient(ellipse_at_top_left,rgba(255,240,245,0.9),rgba(240,240,255,0.9)),radial-gradient(ellipse_at_bottom_right,rgba(229,231,235,0.9),rgba(255,255,255,0.9))] relative">
      {/* Soft floral corners */}
      <div className="pointer-events-none absolute -top-10 -left-10 w-72 h-72 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-12 w-80 h-80 rounded-full bg-violet-200/40 blur-3xl" />

      {/* Portrait frame 2:1, non-scrollable */}
      <div className="h-full w-full flex items-center justify-center p-4">
        <div
          className="relative bg-white/60 backdrop-blur-sm border border-white/50 shadow-xl rounded-3xl overflow-hidden flex flex-col"
          style={{ height: '100%', aspectRatio: '1 / 2', maxHeight: '100%', maxWidth: '50vh' }}
        >
          {/* Content layer */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1100&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
          <div className="relative flex flex-col h-full">
            {/* Header / Names */}
            <div className="flex-1 flex items-center justify-center px-8 pt-8">
              <div className="text-center space-y-4">
                <div className="uppercase tracking-[0.35em] text-xs text-gray-500">The Wedding of</div>
                <h1 className="font-serif text-5xl sm:text-6xl leading-tight text-gray-900">
                  Sarah & Michael
                </h1>
                <p className="text-base sm:text-lg text-gray-600">The beginning of forever</p>

                <div className="mt-6 grid grid-cols-1 gap-3 text-gray-700">
                  <div className="flex items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 border border-rose-100">
                      <CheckCircle2 className="h-4 w-4" /> Saturday, August 15, 2026
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 border border-violet-100">
                      <ClockIcon /> 2:00 PM - 10:00 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                      <PinIcon /> Rose Garden Venue
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom shortcuts */}
            <div className="border-t border-white/60 bg-white/70 backdrop-blur-md">
              <div className="px-4 pt-3">
                <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-rose-300 to-violet-300" />
              </div>
              <div className="flex items-stretch gap-1 px-2 py-1">
                <Shortcut icon={QrCode} label="Check-in" onClick={() => open('checkin')} accent="emerald" />
                <Shortcut icon={Heart} label="Donation" onClick={() => open('donation')} accent="rose" />
                <Shortcut icon={BookOpen} label="Love Story" onClick={() => open('story')} accent="violet" />
                <Shortcut icon={Images} label="Album" onClick={() => open('album')} accent="violet" />
                <Shortcut icon={MessageCircle} label="Message" onClick={() => open('message')} accent="emerald" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal title="Guest Check-in" open={openModal === 'checkin'} onClose={close}>
        <div className="grid grid-cols-2 gap-4">
          <ActionCard
            icon={QrCode}
            title="Scan QR"
            subtitle="Use the device camera"
            accent="emerald"
          />
          <ActionCard icon={LogIn} title="Login Code" subtitle="Enter your code" />
          <ActionCard icon={Search} title="Search Name" subtitle="Find your invite" />
          <ActionCard icon={Phone} title="WhatsApp" subtitle="Check-in via number" />
        </div>
      </Modal>

      <Modal title="Digital Donation" open={openModal === 'donation'} onClose={close}>
        <div className="space-y-5">
          <div className="grid grid-cols-3 gap-3">
            {[25, 50, 100, 150, 200, 300].map((amt) => (
              <button
                key={amt}
                className="px-3 py-2 rounded-xl border bg-white hover:bg-rose-50 text-rose-700 border-rose-100 font-medium"
              >
                ${'{'}amt{'}'}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              type="number"
              placeholder="Custom amount"
              className="col-span-2 px-3 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-rose-200"
            />
            <button className="px-4 py-2 rounded-xl bg-rose-600 text-white font-semibold hover:bg-rose-700">
              Continue
            </button>
          </div>
          <textarea
            rows={3}
            placeholder="Leave a note for the couple (optional)"
            className="w-full px-3 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-rose-200"
          />
          <div className="flex items-center gap-3 text-rose-700">
            <Heart className="h-5 w-5" />
            <span className="text-sm">Secure payment via your preferred wallet/bank</span>
          </div>
        </div>
      </Modal>

      <Modal title="Love Story & Profiles" open={openModal === 'story'} onClose={close} full>
        <div className="grid md:grid-cols-2 gap-6 h-full">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Our Story</h4>
            <p className="text-gray-700 leading-relaxed">
              From the first coffee to countless sunsets, Sarah and Michael found home in
              each other. What began as a serendipitous hello turned into a love that
              feels both brand new and timeless.
            </p>
            <div className="grid grid-cols-3 gap-3">
              <StoryPill label="How We Met" />
              <StoryPill label="First Trip" />
              <StoryPill label="The Proposal" />
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Profiles</h4>
            <div className="grid grid-cols-2 gap-4">
              <ProfileCard name="Sarah" subtitle="Loves flowers & poetry" />
              <ProfileCard name="Michael" subtitle="Adores music & sunsets" />
            </div>
          </div>
        </div>
      </Modal>

      <Modal title="Photo & Video Album" open={openModal === 'album'} onClose={close} full>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 h-full">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden bg-gray-100"
            >
              <img
                src={`https://source.unsplash.com/random/800x800?sig=${'{'}i{'}'}&wedding`}
                alt="Memory"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </Modal>

      <Modal title="Leave a Message" open={openModal === 'message'} onClose={close}>
        <div className="grid grid-cols-3 gap-4">
          <ActionCard icon={MessageCircle} title="Text" subtitle="Type your wishes" />
          <ActionCard icon={Camera} title="Photo" subtitle="Capture a moment" />
          <ActionCard icon={Video} title="Video" subtitle="Record a greeting" />
        </div>
      </Modal>
    </div>
  )
}

function ActionCard({ icon: Icon, title, subtitle, accent }) {
  const ring =
    accent === 'emerald'
      ? 'ring-emerald-200 hover:ring-emerald-300'
      : accent === 'violet'
      ? 'ring-violet-200 hover:ring-violet-300'
      : 'ring-rose-200 hover:ring-rose-300'
  return (
    <button className={`group rounded-2xl border border-gray-100 bg-white p-4 text-left shadow-sm ring-1 ${ring} transition-all hover:shadow-md`}>
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-gray-50 p-3">
          <Icon className="h-6 w-6 text-gray-700" />
        </div>
        <div>
          <div className="font-semibold text-gray-800">{title}</div>
          <div className="text-sm text-gray-500">{subtitle}</div>
        </div>
      </div>
    </button>
  )
}

function StoryPill({ label }) {
  return (
    <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 border border-violet-100 text-sm">
      <Ring className="h-4 w-4 mr-1.5" /> {label}
    </span>
  )
}

function ProfileCard({ name, subtitle }) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-xl overflow-hidden bg-gray-100">
          <img
            src={`https://source.unsplash.com/random/160x160?portrait,${'{'}name{'}'}`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-gray-800">{name}</div>
          <div className="text-sm text-gray-500">{subtitle}</div>
        </div>
      </div>
    </div>
  )
}

// Small helper icons (to keep icon set consistent without extra imports)
function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M12 8v4l3 3" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M12 22s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="11" r="3" />
    </svg>
  )
}
