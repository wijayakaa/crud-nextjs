import ContactTable from '@/components/contact-table';
import Search from '@/components/search';
import { CreateButton } from '@/components/button';

export default function Contacts() {
    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center justify-beetwen gap-1 mb-5">
                <Search />
                <CreateButton />
            </div>
            <ContactTable />
        </div>
    )
}