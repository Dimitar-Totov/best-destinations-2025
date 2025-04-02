import { render, screen } from "@testing-library/react";

import About from "./About";

describe('AboutSection Component', () => {
    test('Rendering is correct', () => {
      render(<About />);
      expect(screen.getByText('To Travel is to Live.')).toBeInTheDocument();
      expect(screen.getByAltText('About')).toHaveAttribute('src', 'https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg');
    });
  
    test('Image is correct', () => {
      render(<About />);
      const image = screen.getByAltText('About');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', 'https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg');
    });
  
    test('Mission text is correct', () => {
      render(<About />);
      expect(screen.getByText('Our Mission')).toBeInTheDocument();
      expect(screen.getByText('To inspire people to explore, appreciate, and protect the beauty of nature. Through our curated guides, stories, and photography, we hope to ignite a sense of wonder and adventure in every traveler.')).toBeInTheDocument();
    });
  
    test('Inspiring destinations text is correct', () => {
      render(<About />);
      expect(screen.getByText('Inspiring Destinations')).toBeInTheDocument();
      expect(screen.getByText('Explore some of the world’s most incredible natural wonders, from hidden gems to famous landmarks.')).toBeInTheDocument();
    });
  });