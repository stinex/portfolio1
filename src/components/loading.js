const Loading = ({animation, loading}) => {
    if (!animation)
        return (
            <div className={!loading ? 'loading' : ''}>
                <div className='loading_wrapper'>
                    <div className="loading_progress">
                        <div className="block top">

                        </div>
                        <div className="author">
                            © {new Date().getFullYear()} | Vladislav Aparin
                        </div>
                        <div className="progress"></div>
                        <div className="block bottom">

                        </div>
                    </div>
                </div>

            </div>
        )
}

export default Loading