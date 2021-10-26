import { render, screen } from '@testing-library/react';
import App from './App';

test('one day', () => {
  render(<App />);
  const day11 = screen.getByRole('button', { name: '11' });
  expect(day11).toBeInTheDocument();
});

test('two days', () => {
  render(<App />);
  const day11 = screen.getByRole('button', { name: '11' });
  const day12 = screen.getByRole('button', { name: '12' });
  expect(day11).toBeInTheDocument();
  expect(day12).toBeInTheDocument();
});

test('three days', () => {
  render(<App />);
  const day11 = screen.getByRole('button', { name: '11' });
  const day12 = screen.getByRole('button', { name: '12' });
  const day13 = screen.getByRole('button', { name: '13' });
  expect(day11).toBeInTheDocument();
  expect(day12).toBeInTheDocument();
  expect(day13).toBeInTheDocument();
});

test('ten days', () => {
  render(<App />);
  const day11 = screen.getByRole('button', { name: '11' });
  const day12 = screen.getByRole('button', { name: '12' });
  const day13 = screen.getByRole('button', { name: '13' });
  const day14 = screen.getByRole('button', { name: '14' });
  const day15 = screen.getByRole('button', { name: '15' });
  const day16 = screen.getByRole('button', { name: '16' });
  const day17 = screen.getByRole('button', { name: '17' });
  const day18 = screen.getByRole('button', { name: '18' });
  const day19 = screen.getByRole('button', { name: '19' });
  const day20 = screen.getByRole('button', { name: '20' });
  expect(day11).toBeInTheDocument();
  expect(day12).toBeInTheDocument();
  expect(day13).toBeInTheDocument();
  expect(day14).toBeInTheDocument();
  expect(day15).toBeInTheDocument();
  expect(day16).toBeInTheDocument();
  expect(day17).toBeInTheDocument();
  expect(day18).toBeInTheDocument();
  expect(day19).toBeInTheDocument();
  expect(day20).toBeInTheDocument();
});
