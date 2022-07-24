import Footer        from '@/components/Footer/Footer';
import Header        from '@/components/Header/Header';

function Layout(props) {
    return (
        <div class="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
            <main class="flex flex-auto flex-col max-w-full">
                <Header/>
                    {props.children}
                <Footer/>
            </main>
        </div>
    );
}

export default Layout;
