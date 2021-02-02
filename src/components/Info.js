import React from 'react'

function Info() {
    return (
        <>
            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
                !
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">¡Más Info!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Este es el contendio</p>
                            <p>Este es el contendio</p>
                            <p>Este es el contendio</p>
                            <p>Este es el contendio</p>
                            <p>Este es el contendio</p>
                            <p>Este es el contendio</p>
                            <p>Este es el contendio</p>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Info
