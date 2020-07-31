module.exports = {
    outputDir: './docs',
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    devServer: {
        proxy: {
            '/api/student/stuRegister': {
                target: 'https://open.duyiedu.com',
                changeOrigin: true
            },
            '/api/student/stuLogin': {
                target: 'https://open.duyiedu.com',
                changeOrigin: true
            }
        }
    }
}