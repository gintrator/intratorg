from werkzeug.serving import run_simple
from beaker import Beaker
from beaker import Request
from beaker import Response
import json

port = 5000
app = Beaker("Intratorg")

app.static_page('/', 'static/index.html', mimetype='text/html')
app.static_page('/resume', 'static/resume.html', mimetype='text/html')
app.static_page('/graphics', 'static/graphics.html', mimetype='text/html')

@app.get('/api/gabriel', mimetype='application/json')
def gabriel(req):
    me = {'name': 'Gabriel', 'age': 21}
    me_json = json.dumps(me)
    return Response(status=200, body=me_json)

if __name__ == '__main__':
    run_simple('localhost', 5000, app)
