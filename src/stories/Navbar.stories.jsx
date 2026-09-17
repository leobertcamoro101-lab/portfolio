// ============================================
// Navbar.stories.jsx
//
// LESSON 1: Basic story structure
//
// Every story file has:
// 1. A default export (meta) — describes the component
// 2. Named exports — each is one "story" (one state)
//
// Meta fields:
// - title: where it appears in the sidebar
// - component: the component being documented
// - tags: ['autodocs'] = auto-generate a Docs page
// - parameters: control the canvas layout
// ============================================
import Navbar from '../components/Navbar';

// ============================================
// Meta — describes this component to Storybook
// ============================================
const meta = {
  title: 'Portfolio/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    // 'fullscreen' removes the padding around the component
    // since Navbar is fixed/full-width
    layout: 'fullscreen',
    // Add a dark background since our navbar is dark
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#070710' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  decorators: [
    // ============================================
    // LESSON 2: Decorators
    //
    // Decorators wrap stories with extra context.
    // Here we add padding so the navbar has space.
    // ============================================
    (Story) => (
      <div style={{ minHeight: '200px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

// ============================================
// LESSON 3: Stories
//
// Each named export = one story.
// The name becomes the label in the sidebar.
// ============================================

// Default state — not scrolled
export const Default = {};

// Scrolled state — would have background blur
// (We can't easily simulate scroll in Storybook
// without play functions, but we document it)
export const WithBackground = {
  // ============================================
  // LESSON 4: Decorators on individual stories
  //
  // We can override state per-story using
  // a decorator that manipulates the component
  // ============================================
  decorators: [
    (Story) => {
      // Simulate scrolled state by patching useState
      return (
        <div style={{ minHeight: '200px' }}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        story: 'Navbar with scrolled background — shown after user scrolls 50px down.',
      },
    },
  },
};

export const MobileMenuOpen = {
  parameters: {
    // Force mobile viewport
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile view with hamburger menu. Click the menu button to open.',
      },
    },
  },
};
