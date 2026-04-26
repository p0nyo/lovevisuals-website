export default function Footer() {
    return (
        <footer className="bg-[#EBE8D8] text-[#678BAA] py-2">
            <div className="flex items-center justify-end text-xl font-bold px-4">
                <p>&copy; {new Date().getFullYear()} love visuals. all rights reserved.</p>
            </div>
        </footer>
    );
}