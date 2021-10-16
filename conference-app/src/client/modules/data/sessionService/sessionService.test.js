const sessionService = require("./sessionService")
// @ponicode
describe("sessionService.getSessions", () => {
    test("0", () => {
        let callFunction = () => {
            sessionService.getSessions()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("sessionService.getSession", () => {
    test("0", () => {
        let callFunction = () => {
            sessionService.getSession("https://accounts.google.com/o/oauth2/revoke?token=%s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            sessionService.getSession("http://base.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            sessionService.getSession("https://croplands.org/app/a/reset?token=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            sessionService.getSession("https://api.telegram.org/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            sessionService.getSession("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            sessionService.getSession(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
