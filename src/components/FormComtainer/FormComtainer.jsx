import BookingForm from "../BookingForm/BookingForm"

export default function FormComtainer() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '24px',
            border: '1px solid #dadde1',
            borderRadius: '10px',
            padding: '44px',
            width: '641px',
            height: '588px',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'start',
                flexDirection: 'column'
            }}>
                <h3 style={{
                    fontWeight: '600',
                    fontSize: '20px',
                    lineHeight: '1.2',
                    color: '#101828',
                    padding: '0',
                    margin: '0', 
                    marginBottom: '8px'
                }}>Book your campervan now</h3>
                <p style={{
                    padding: '0',
                    margin: '0',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: '#6c717b',
                }}>
                    Stay connected! We are always ready to help you.
                </p>
            </div>
            <BookingForm />
        </div>
    );
}
