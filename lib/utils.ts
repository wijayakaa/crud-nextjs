export const formatDate =(datestr: string) => {
    const date = new Date(datestr);
    const formatter = new Intl.DateTimeFormat('id-ID', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });

    return formatter.format(date);
}