import { render, screen } from "@testing-library/react";
import { PostCard } from '.';
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock

describe('<PostCard />', () => {
    test('should resnder PostCard correctly', () => {
       render(<PostCard {...props}/>)

       expect(screen.getByRole('img', {name: /title/i }))
       .toHaveAttribute('src', '');

       expect(screen.getByRole('heading', {name: /title/i }))
       .toBeInTheDocument('src', '');
    });
});