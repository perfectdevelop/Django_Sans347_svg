from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render



# Create your views here.

def index(request):
    return render(request, "input.html")

def generate(request):
    equip_type = request.POST.get('equip_type') 
    fluid_state = request.POST.get('fluid_state')
    fluid_group = request.POST.get('fluid_group')
    volumn = float(request.POST.get('volumn'))
    pressure = float(request.POST.get('pressure'))
    print(equip_type, fluid_group, fluid_state, volumn, pressure)
    pv = volumn * pressure

    if  equip_type == 'steam_generator':
        figure = 'figure5'
        if pressure < 50:
            result = 0
        elif volumn < 2 or (volumn >= 2 and volumn < 100 and pressure < 2500 and pv < 5000):
            result = 1
        elif(volumn >= 2 and 5000 <= pv < 20000  and pressure < 3200):
            result = 2
        elif (volumn < 1000 and 20000 <= pv < 300000 and pressure < 3200):
            result = 3
        else:
            result = 4
        return JsonResponse({'figure': figure, 'result': result, 'volumn': volumn, 'pressure': pressure})
    elif equip_type == 'piping':
        if fluid_state == 'gas':
            if fluid_group == 'fluid_group1':
                figure = 'figure6'
                if pressure < 50:
                    result = 0
                elif volumn < 25:
                    result = 5
                elif 25 <= volumn < 100 and pv < 100000:
                    result = 1
                elif (25 <= volumn < 100 and pressure >= 3500) or (1000 <= pressure < 3500 and 100000 <= pv < 350000) or (100 <= volumn < 350 and pressure < 1000):
                    result = 2
                else:
                    result = 3
                return JsonResponse({'figure': figure, 'result': result, 'volumn': volumn, 'pressure': pressure})
            elif fluid_group == 'fluid_group2':
                figure = 'figure7'
                if pressure < 50:
                    result = 0
                elif volumn < 32 or (volumn >= 32 and pv < 100000):
                    result = 5
                elif (32 <= volumn < 100 and pressure >= 3500) or (pressure < 3500 and volumn >= 32 and 100000 <= pv < 350000):
                    result = 1
                elif (100 <= volumn < 250 and pv > 350000 and pressure >= 2000) or (pressure < 2000 and 35000 <= pv < 500000):
                    result = 2
                else:
                    result = 3
                return JsonResponse({'figure': figure, 'result': result, 'volumn': volumn, 'pressure': pressure})
        elif fluid_state == 'liquid':
            if fluid_group == 'fluid_group1':
                figure = 'figure8'
                if pressure < 50:
                    result = 0
                elif volumn < 25 or pv < 200000 or pressure < 100:
                    result = 5
                elif 100 <= pressure < 1000 and pv >= 200000:
                    result = 1
                elif 1000 <= pressure < 50000 and pv >= 200000 and volumn >= 25:
                    result = 2
                else:
                    result = 3
                return JsonResponse({'figure': figure, 'result': result, 'volumn': volumn, 'pressure': pressure})
            elif fluid_group == 'fluid_group2':
                figure = 'figure9'
                if pressure < 50:
                    result = 0
                elif volumn < 200 or pv < 500000 or pressure < 1000:
                    result = 5
                elif volumn >= 200 and pv >= 500000 and 1000 <= pressure < 5000:
                    result = 1
                else:
                    result =2
                return JsonResponse({'figure': figure, 'result': result, 'volumn': volumn, 'pressure': pressure})
    elif equip_type == 'pressure_vessel':
        if fluid_state == 'gas':
            if fluid_group == 'fluid_group1':
                figure = 'figure1'
                if pressure < 50:
                    result = 0
                elif (pressure < 20000 and volumn < 1) or pv < 2500:
                    result = 5
                elif volumn >= 1 and 2500 <= pv < 5000:
                    result = 1
                elif volumn >= 1 and 5000 <= pv < 20000:
                    result = 2
                elif (20000 <= pressure < 100000 and volumn < 1) or (volumn >= 1 and 20000 <= pv < 100000):
                    result = 3
                else: 
                    result = 4
                return JsonResponse({'figure': figure, 'result': result, 'volumn': volumn, 'pressure': pressure})
            elif fluid_group == 'fluid_group2':
                figure = 'figure2'
                if pressure < 50:
                    result = 0
                elif (pressure < 100000 and volumn < 1) or (volumn >= 1 and pv < 5000):
                    result = 5
                elif volumn >= 1 and 5000 <= pv < 20000:
                    result = 1
                elif volumn >= 1 and 20000 <= pv < 100000:
                    result = 2
                elif (100000 <= pressure < 300000 and volumn < 1) or (volumn >= 1 and 100000 <= pv < 300000 and volumn < 750) or (volumn >= 750 and pv >= 100000 and pressure < 400):
                    result = 3
                else:
                    result = 4
                return JsonResponse({'figure': figure, 'result': result, 'volumn': volumn, 'pressure': pressure})
        elif fluid_state == 'liquid':
            if fluid_group == 'fluid_group1':
                figure = 'figure3'
                if pressure < 50:
                    result = 0
                elif (pressure < 50000 and volumn < 1) or (volumn >= 1 and pv < 20000):
                    result = 5
                elif pressure < 1000 and pv >= 20000:
                    result = 1
                elif 1000 <= pressure < 50000 and volumn >= 1 and pv >= 20000:
                    result = 2
                elif volumn >= 1 and pressure >= 50000:
                    result = 3
                else:
                    result = 2
                return JsonResponse({'figure': figure, 'result': result, 'volumn': volumn, 'pressure': pressure})
            elif fluid_group == 'fluid_group2':
                figure = 'figure4'
                if pressure < 50:
                    result = 0
                elif (pressure < 100000 and volumn < 10) or (volumn >= 10 and pv < 1000000 and volumn < 1000) or (pressure < 1000):
                    result = 5
                elif 1000 <= pressure < 50000 and pv >= 1000000:
                    result = 1
                elif pressure >= 50000 and pv >= 1000000 and volumn >= 10:
                    result = 2
                else:
                    result = 1
                return JsonResponse({'figure': figure, 'result': result, 'volumn': volumn, 'pressure': pressure})
    elif equip_type == 'transportable':
        figure = 'figure3'
        if pressure < 50:
            result = 0
        elif (pressure < 50000 and volumn < 1) or (volumn >= 1 and pv < 20000):
            result = 5
        elif pressure < 1000 and pv >= 20000:
            result = 1
        elif 1000 <= pressure < 50000 and volumn >= 1 and pv >= 20000:
            result = 2
        elif volumn >= 1 and pressure >= 50000:
            result = 3
        else:
            result = 2
        return JsonResponse({'figure': figure, 'result': result, 'volumn': volumn, 'pressure': pressure})
    else:
        return HttpResponse("error")
  
