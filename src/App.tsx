import './App.css';
import { useViewportSize } from './hooks';

export function App() {
	const { height, width } = useViewportSize();

	return (
		<>
			Width: {width}, height: {height}
		</>
	);
}
