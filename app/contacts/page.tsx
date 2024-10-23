import ContactTable from '@/components/contact-table';
import Search from '@/components/search';
import { CreateButton } from '@/components/button';


const Contacts = async ({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) => {
    const query = searchParams?.query || '';
    const currentPage  = Number(searchParams?.page) || 1;
    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center justify-beetwen gap-1 mb-5">
                <Search />
                <CreateButton />
            </div>
            <ContactTable query={query} currentPage={currentPage} />
        </div>
    )
}

export default Contacts;