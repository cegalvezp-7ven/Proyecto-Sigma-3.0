import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import Badge from '../components/atoms/Badge';
import Price from '../components/atoms/Price';
import ProductGrid from '../components/organisms/ProductGrid';
import SectionHeading from '../components/molecules/SectionHeading';
import Navbar from '../components/organisms/Navbar';

describe('Pruebas unitarias de componentes frontend', () => {
  let host;
  let root;
  beforeEach(() => {
    localStorage.clear();
    host = document.createElement('div');
    document.body.appendChild(host);
    root = createRoot(host);
  });
  afterEach(async () => {
    await act(async () => root.unmount());
    localStorage.clear();
    host.remove();
  });
  const render = async (element) => {
    await act(async () => root.render(element));
    return host;
  };

  describe('Badge', () => {
    it('muestra el contenido recibido como hijo', async () => {
      await render(<Badge>Oferta</Badge>);
      expect(host.textContent).toContain('Oferta');
    });
    it('aplica la variante predeterminada purple', async () => {
      await render(<Badge>Novedad</Badge>);
      expect(host.querySelector('.badge-atom').classList.contains('badge-purple')).toBeTrue();
    });
    it('aplica una variante y clase personalizada', async () => {
      await render(<Badge variant="dark" className="test-badge">Colección</Badge>);
      const badge = host.querySelector('.badge-atom');
      expect(badge.classList.contains('badge-dark')).toBeTrue();
      expect(badge.classList.contains('test-badge')).toBeTrue();
    });
  });

  describe('Price', () => {
    it('muestra el importe con formato monetario chileno', async () => {
      await render(<Price amount={12990} />);
      expect(host.textContent).toContain('12.990');
    });
    it('muestra cero cuando no se entrega un importe', async () => {
      await render(<Price />);
      expect(host.textContent).toContain('0');
    });
    it('combina la clase base con una clase adicional', async () => {
      await render(<Price amount={5000} className="checkout-total" />);
      expect(host.querySelector('strong').classList.contains('price-atom')).toBeTrue();
      expect(host.querySelector('strong').classList.contains('checkout-total')).toBeTrue();
    });
  });

  describe('ProductGrid', () => {
    const sampleProduct = {
      id: 'test-1', name: 'Chocolate Gamer', category: 'Minecraft',
      description: 'Chocolate de prueba', image: '/images/box-minecraft.jpg', price: 4990,
    };
    it('muestra un mensaje personalizado cuando la lista está vacía', async () => {
      await render(<MemoryRouter><ProductGrid products={[]} emptyMessage="Sin resultados" /></MemoryRouter>);
      expect(host.textContent).toContain('Sin resultados');
      expect(host.querySelector('.products-grid')).toBeNull();
    });
    it('renderiza una tarjeta por producto recibido', async () => {
      await render(<MemoryRouter><ProductGrid products={[sampleProduct, { ...sampleProduct, id: 'test-2' }]} /></MemoryRouter>);
      expect(host.querySelectorAll('.product-card').length).toBe(2);
    });
    it('muestra nombre, categoría y precio del producto', async () => {
      await render(<MemoryRouter><ProductGrid products={[sampleProduct]} /></MemoryRouter>);
      expect(host.textContent).toContain('Chocolate Gamer');
      expect(host.textContent).toContain('Minecraft');
      expect(host.textContent).toContain('4.990');
    });
  });

  describe('Navbar', () => {
    it('renderiza los enlaces principales y el estado inicial del menú', async () => {
      await render(<MemoryRouter><Navbar /></MemoryRouter>);
      expect(host.textContent).toContain('Inicio');
      expect(host.textContent).toContain('Productos');
      expect(host.querySelector('.menu-toggle').getAttribute('aria-expanded')).toBe('false');
    });

    it('calcula el contador del carrito a partir del almacenamiento local', async () => {
      localStorage.setItem('gamebites_cart', JSON.stringify([{ quantity: 2 }, { quantity: 1 }]));
      await render(<MemoryRouter><Navbar /></MemoryRouter>);
      expect(host.querySelector('.cart-count').textContent).toBe('3');
    });

    it('muestra el enlace de administración para un usuario administrador', async () => {
      localStorage.setItem('gamebites_user', JSON.stringify({ name: 'Admin', role: 'admin' }));
      await render(<MemoryRouter><Navbar /></MemoryRouter>);
      expect(host.textContent).toContain('Panel Admin');
      expect(host.textContent).toContain('Hola, Admin');
    });
  });

  describe('SectionHeading', () => {
    it('muestra título y subtítulo', async () => {
      await render(<MemoryRouter><SectionHeading title="Catálogo" subtitle="8 productos" /></MemoryRouter>);
      expect(host.querySelector('h2').textContent).toBe('Catálogo');
      expect(host.textContent).toContain('8 productos');
    });
    it('omite la ceja cuando no se proporciona', async () => {
      await render(<MemoryRouter><SectionHeading title="Destacados" /></MemoryRouter>);
      expect(host.querySelector('.section-heading-eyebrow')).toBeNull();
    });
    it('muestra el enlace de acción con destino y texto', async () => {
      await render(<MemoryRouter><SectionHeading title="Productos" actionTo="/products" actionText="Ver todos" /></MemoryRouter>);
      const link = host.querySelector('.section-heading-action');
      expect(link).not.toBeNull();
      expect(link.textContent).toBe('Ver todos');
      expect(link.getAttribute('href')).toBe('/products');
    });
  });
});
